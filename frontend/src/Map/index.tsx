import { graphql } from "relay-runtime"
import { LocateControl } from "./LocateControl"
import Styles from "./index.module.scss"
import "leaflet/dist/leaflet.css"
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet"
import { useFragment, usePaginationFragment, usePreloadedQuery } from "react-relay"
import { useLoaderData } from "react-router"
import { type MapQuery, type MapQuery as MapQueryType } from "./__generated__/MapQuery.graphql"
import { useEffect } from "react"
import { Spot } from "./Spot"
import { DataLoading } from "./DataLoading"
import { Search } from "./Search"
import "leaflet-loading"
import { Controls } from "./Controls"
import type { MapQueryFragment$key } from "./__generated__/MapQueryFragment.graphql"

export const query = graphql`
query MapQuery {
  ...MapQueryFragment
  viewer {
    ...ControlsViewerFragment
  }
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
  const queryRef = usePreloadedQuery<MapQueryType>(query, useLoaderData())
  const {data: {spots: { edges: spots }}, loadNext, hasNext, isLoadingNext} = usePaginationFragment<MapQuery, MapQueryFragment$key>(queryFragment, queryRef)

  useEffect(() => {
    loadNext(500)
  }, [hasNext, loadNext])

  return <MapContainer
    // @ts-ignore
    center={[0, 0]}
    className={Styles.map}
    loadingControl
    preferCanvas
    zoom={3}
  >

    <LocateControl />
    <DataLoading loading={isLoadingNext || hasNext} />
    <Search />
    <Controls viewerRef={queryRef.viewer} />

    <TileLayer
      // @ts-ignore
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        spots?.map(({node, node: { lonlat: { x, y } }}) =>
        <CircleMarker
          key={[x, y].join(",")}
          center={[x, y]}
          // @ts-ignore
          radius={5}
          fillOpacity={0.9}>
          <Popup
            // @ts-ignore
            maxWidth={600}>
            <Spot spotRef={node} />
          </Popup>
        </CircleMarker>
      )
      }
    </MapContainer>
}
