import { useCallback } from "react"
import { useMutation } from "react-relay"
import { ConnectionHandler, graphql } from "relay-runtime"
import { type useCreateSpotMutation$data, type useCreateSpotMutation } from "./__generated__/useCreateSpotMutation.graphql"

const mutation = graphql`
mutation useCreateSpotMutation($description: String, $childFriendly: Boolean!, $connections: [ID!]!, $crowded: Boolean!, $lat: Float!, $long: Float!, $parking: Boolean!, $references: [String!, ]$rocky: Boolean!, $scenic: Boolean!, $sheltered: Boolean!, $sitting: Boolean!, $table: Boolean!, $trees: Boolean!, $wheelchairAccessible: Boolean!) {
  createSpot(input: {childFriendly: $childFriendly, crowded: $crowded, description: $description, lat: $lat, long: $long, parking: $parking, references: $references, rocky: $rocky, scenic: $scenic, sheltered: $sheltered, sitting: $sitting, table: $table, trees: $trees, wheelchairAccessible: $wheelchairAccessible}) {
    errors
    spot @appendNode(connections: $connections, edgeTypeName: "SpotEdge") {
      childFriendly
      description
      crowded
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
}
`

export const useCreateSpot = () => {
  const [createSpot] = useMutation<useCreateSpotMutation>(mutation)

  return useCallback((variables: Omit<Parameters<typeof createSpot>[0]["variables"], "connections">) => new Promise<useCreateSpotMutation$data["createSpot"]>((resolve, reject) => {
    createSpot({
      onCompleted: (payload) => {
        if (payload?.createSpot?.spot || payload?.createSpot?.errors) resolve(payload.createSpot)
        else reject()
      },
      onError: reject,
      variables: {
        ...variables,
        connections: [
          ConnectionHandler.getConnectionID("root", "Map_spots"),
          ConnectionHandler.getConnectionID("root:viewer", "Spots_spots")
        ]
      }
    })
  }), [createSpot])
}
