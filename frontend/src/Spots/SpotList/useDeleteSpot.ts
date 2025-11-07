import { useMemo } from "react"
import { useMutation } from "react-relay"
import { ConnectionHandler, graphql } from "relay-runtime"
import type { useDeleteSpotMutation } from "./__generated__/useDeleteSpotMutation.graphql"

const mutation = graphql`
mutation useDeleteSpotMutation($id: ID!, $connections: [ID!]!) {
  deleteSpot(input: {spotId: $id}) {
    spot {
      id @deleteEdge(connections: $connections)
    }
  }
}
`

export const useDeleteSpot = () => {
  const [deleteSpot, loading] = useMutation<useDeleteSpotMutation>(mutation)

  return useMemo(() => [
    (id: string) => new Promise<void>((resolve, reject) => deleteSpot({
      onCompleted: (payload) => {
        if (payload?.deleteSpot?.spot) resolve()
          else reject()
      },
      onError: reject,
      variables: {
        connections: [
          ConnectionHandler.getConnectionID("root", "Map_spots"),
          ConnectionHandler.getConnectionID("root:viewer", "Spots_spots")
        ],
        id
      }
    })),
    loading
  ] as const, [loading])
}
