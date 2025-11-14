import { FaPlus } from "react-icons/fa"
import { NavLink, useLoaderData } from "react-router"
import { SpotList } from "./SpotList"
import { useEffect } from "react"
import { graphql, usePaginationFragment, usePreloadedQuery } from "react-relay"
import { type SpotsQuery } from "./__generated__/SpotsQuery.graphql"
import type { SpotsQueryFragment$key } from "./__generated__/SpotsQueryFragment.graphql"

export const query = graphql`
query SpotsQuery {
  ...SpotsQueryFragment
}
`

const queryFragment = graphql`
fragment SpotsQueryFragment on Query
@argumentDefinitions(
  count: { type: "Int", defaultValue: 500 }
  cursor: { type: "String"  }

)
@refetchable(queryName: "SpotsPaginationQuery")
{
  viewer {
    spots(first: $count, after: $cursor) @connection(key: "Spots_spots") {
      edges {
        ...SpotListSpotFragment
      }
    }
  }
}
`

export const Spots = () => {
  const queryRef = usePreloadedQuery<SpotsQuery>(query, useLoaderData())
  const {data: { viewer }, loadNext, hasNext} = usePaginationFragment<SpotsQuery, SpotsQueryFragment$key>(queryFragment, queryRef)
  const spots = viewer?.spots?.edges

  useEffect(() => {
    loadNext(500)
  }, [hasNext, loadNext])

  return <div className="d-flex flex-column">
    <h1 className="h3">Spots</h1>
    <NavLink className="align-self-start btn btn-sm btn-primary d-flex align-items-center gap-1 mb-3" to="/user/spots/add">
      <FaPlus />
      Add spot
    </NavLink>
    {spots && <SpotList spotsRef={spots} />}
</div>
}
