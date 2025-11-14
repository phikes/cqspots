import { useFragment } from "react-relay"
import { graphql } from "relay-runtime"
import type { SpotListSpotFragment$key } from "./__generated__/SpotListSpotFragment.graphql"
import { Tooltip } from "@/Tooltip"
import { Icon } from "@/Icon"
import { FaTrash } from "react-icons/fa"
import { LoadingButton } from "@/LoadingButton"
import { useDeleteSpot } from "./useDeleteSpot"
import { useCallback, useEffect, useState } from "react"
import { FaPencil } from "react-icons/fa6"
import { NavLink } from "react-router"

const fragment = graphql`
fragment SpotListSpotFragment on SpotEdge @relay(plural: true) {
  node {
    childFriendly
    crowded
    description
    id
    lonlat {
      x
      y
    }
    parking
    references
    rocky
    scenic
    sheltered
    sitting
    table
    trees
    wheelchairAccessible
  }
}
`

interface Props {
  spotsRef: SpotListSpotFragment$key
}

export const SpotList = ({spotsRef}: Props) => {
  const [deleteSpot, deleteLoading] = useDeleteSpot()
  const spots = useFragment(fragment, spotsRef)
  const [deletingSpot, setDeletingSpot] = useState<string | null>(null)

  const doDeleteSpot = useCallback((id: string) => () => {
    if (!confirm("Are you sure?")) return

    setDeletingSpot(id)
    deleteSpot(id)
  }, [deleteSpot])

  useEffect(() => {
    if (deleteLoading) return

    setDeletingSpot(null)
  }, [deleteLoading])

  return <table className="table">
    <thead>
      <tr>
        <th>Location</th>
        <th>References</th>
        <th>Description</th>
        <th>Details</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        spots.map(({ node: { childFriendly, crowded, description, id, lonlat: {x, y}, parking, references, rocky, scenic, sheltered, sitting, table, trees, wheelchairAccessible } }) => <tr key={id}>
          <td>{x}, {y}</td>
          <td>{references?.join(", ")}</td>
          <td>{description?.slice(0, 50)}</td>
          <td>
            <div className="d-flex gap-1 mb-3">
              {childFriendly && <Tooltip description="Child friendly"><Icon icon="childFriendly" /></Tooltip>}
              {crowded && <Tooltip description="Crowded"><Icon icon="crowded" /></Tooltip>}
              {parking && <Tooltip description="Parking"><Icon icon="parking" /></Tooltip>}
              {rocky && <Tooltip description="Rocky"><Icon icon="rocky" /></Tooltip>}
              {scenic && <Tooltip description="Scenic"><Icon icon="scenic" /></Tooltip>}
              {sheltered && <Tooltip description="Sheltered"><Icon icon="sheltered" /></Tooltip>}
              {sitting && <Tooltip description="Sitting"><Icon icon="sitting" /></Tooltip>}
              {table && <Tooltip description="Table"><Icon icon="table" /></Tooltip>}
              {trees && <Tooltip description="Trees"><Icon icon="trees" /></Tooltip>}
              {wheelchairAccessible && <Tooltip description="Wheelchair accessible"><Icon icon="wheelchairAccessible" /></Tooltip>}
            </div>
          </td>
          <td>
            <NavLink className="p-0 btn btn-link btn-sm me-1" to={`/user/spots/${id}`}><FaPencil title="Edit" /></NavLink>
            <LoadingButton className="p-0" loading={deleteLoading && deletingSpot === id} onClick={doDeleteSpot(id)} size="sm" variant="link"><FaTrash title="Delete" /></LoadingButton>
          </td>
        </tr>)
      }
    </tbody>
  </table>
}
