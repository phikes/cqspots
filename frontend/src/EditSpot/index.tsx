import { SpotForm, type Values } from "@/SpotForm"
import { FaArrowLeft } from "react-icons/fa"
import { NavLink, useLoaderData, useNavigate } from "react-router"
import { useUpdateSpot } from "./useUpdateSpot"
import { useCallback } from "react"
import toast from "react-hot-toast"
import { graphql } from "relay-runtime"
import { usePreloadedQuery } from "react-relay"
import { type EditSpotQuery } from "./__generated__/EditSpotQuery.graphql"

export const query = graphql`
query EditSpotQuery($id: ID!) {
  node(id: $id) {
    ... on Spot {
      ...SpotFormSpotFragment
      id
    }
  }
}
`

export const EditSpot = () => {
  const queryRef = usePreloadedQuery<EditSpotQuery>(query, useLoaderData())
  const updateSpot = useUpdateSpot()
  const navigate = useNavigate()

  const doUpdateSpot = useCallback(async (values: Values & {lat: number, long: number}) => {
    if (!queryRef.node?.id) return

    const preparedValues = {
      ...values,
      references: values.references.split(",").map((reference) => reference.trim().toUpperCase()),
      spotId: queryRef.node.id
    }

    try {
      const response = await updateSpot(preparedValues)
      if (response?.spot) {
        navigate("/user/spots")
        toast.success("Successfully updated spot")
      }
      else if (response?.errors) toast.error(response?.errors.join(", "))
      else toast.error("Something went wrong")
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      toast.error(error.toString())
    }
  }, [queryRef, navigate, updateSpot])

  return <>
  <div className="d-flex mb-3">
    <NavLink className="d-flex align-items-center gap-2 align-self-start" to="/user/spots"><FaArrowLeft />Spots</NavLink>
  </div>
  <SpotForm onSubmit={doUpdateSpot} spotRef={queryRef.node} />
</>
}
