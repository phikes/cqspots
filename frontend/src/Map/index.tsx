import { graphql } from "relay-runtime"
import { LocateControl } from "./LocateControl"
import Styles from "./index.module.scss"
import "leaflet/dist/leaflet.css"
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet"
import { usePaginationFragment, usePreloadedQuery } from "react-relay"
import { useLoaderData } from "react-router"
import { type MapQuery as MapQueryType } from "./__generated__/MapQuery.graphql"
import { useEffect } from "react"
import { Spot } from "./Spot"
import { DataLoading } from "./DataLoading"
import { Search } from "./Search"
import "leaflet-loading"

export const MapQuery = graphql`
query MapQuery {
  ...MapQueryFragment
}
`

const queryFragment = graphql`
fragment MapQueryFragment on Query
@argumentDefinitions(
  count: { type: "Int", defaultValue: 500 }
  cursor: { type: "String"  }

)
@refetchable(queryName: "MapPaginationQuery")
{
  spots(first: $count, after: $cursor) @connection(key: "Map_spots") {
    edges {
      node {
        ...SpotFragment
        lonlat {
          x
          y
        }
      }
    }
  }
}
`

export const Map = () => {
  const query = usePreloadedQuery<MapQueryType>(MapQuery, useLoaderData())
  const {data: {spots: { edges: spots }}, loadNext, hasNext, isLoadingNext} = usePaginationFragment(queryFragment, query)

  useEffect(() => {
    loadNext()
  }, [hasNext, loadNext])

  return <MapContainer
    center={[0, 0]}
    className={Styles.map}
    loadingControl
    preferCanvas
    zoom={3}
  >

    <LocateControl />
    <DataLoading loading={isLoadingNext || hasNext} />
    <Search />

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        spots.map(({node, node: { lonlat: { x, y } }}) =>
        <CircleMarker key={[x, y].join(",")} center={[x, y]} stroke={0} radius={5} fillOpacity={0.8}>
          <Popup maxWidth={600}>
            <Spot spotRef={node} />
          </Popup>
        </CircleMarker>
      )
      }
    </MapContainer>
}
