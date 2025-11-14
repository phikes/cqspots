import { graphql } from "relay-runtime"
import { LocateControl } from "@/LocateControl"
import Styles from "./index.module.scss"
import "leaflet/dist/leaflet.css"
import { CircleMarker, MapContainer, Popup, TileLayer } from "react-leaflet"
import { usePaginationFragment, usePreloadedQuery } from "react-relay"
import { useLoaderData } from "react-router"
import { type MapQuery, type MapQuery as MapQueryType } from "./__generated__/MapQuery.graphql"
import { useEffect, useState } from "react"
import { Spot } from "./Spot"
import { DataLoading } from "./DataLoading"
import { Search } from "@/Search"
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
        id
        lonlat {
          x
          y
        }
        references
      }
    }
  }
}
`

const getColorFromReferences = (references: string[]) => {
  switch(references.length) {
    case 0:
      return "blue"
    case 1:
      return "#f8ca00"
    case 2:
      return "#e97f02"
    case 3:
      return "#bd1550"
    default:
      return "#490a3d"
  }
}

export const Map = () => {
  const queryRef = usePreloadedQuery<MapQueryType>(query, useLoaderData())
  const {data: {spots: { edges: spots }}, loadNext, hasNext, isLoadingNext} = usePaginationFragment<MapQuery, MapQueryFragment$key>(queryFragment, queryRef)

  // this might be fragile, but it helps to render only one disqus embed (more than one leads to bugs)
  const [selectedSpotId, setSelectedSpotId] = useState<string>()
  useEffect(() => {
    loadNext(500)
  }, [hasNext, loadNext])

  return <MapContainer
    center={[0, 0]}
    className={Styles.map}
    // @ts-expect-error Otherwise no loading control
    loadingControl
    preferCanvas
    zoom={3}
  >

    <LocateControl />
    <DataLoading loading={isLoadingNext || hasNext} />
    <Search />
    <Controls viewerRef={queryRef.viewer} />

    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        spots?.map(({node, node: { id, lonlat: { x, y }, references }}) =>
        <CircleMarker
          key={id}
          eventHandlers={{
            click: () => setSelectedSpotId(id)
          }}
          center={[y, x]}
          radius={5}
          color={getColorFromReferences(references)}
          fillOpacity={0.9}>
          <Popup
            maxWidth={600}>
            {selectedSpotId === id && <Spot spotRef={node} />}
          </Popup>
        </CircleMarker>
      )
      }
    </MapContainer>
}
