import { SpotForm, type Values } from "@/SpotForm"
import { FaArrowLeft } from "react-icons/fa"
import { NavLink, useNavigate } from "react-router"
import { useCreateSpot } from "./useCreateSpot"
import { useCallback } from "react"
import toast from "react-hot-toast"

export const AddSpot = () => {
  const createSpot = useCreateSpot()
  const navigate = useNavigate()

  const doCreateSpot = useCallback(async (values: Values & {lat: number, long: number}) => {
    const preparedValues = {
      ...values,
      references: values.references.split(",").map((reference) => reference.trim().toUpperCase())
    }

    try {
      const response = await createSpot(preparedValues)
      if (response?.spot) navigate("/user/spots")
      else if (response?.errors) toast.error(response?.errors.join(", "))
      else toast.error("Something went wrong")
    } catch (error: any) { // eslint-disable-line @typescript-eslint/no-explicit-any
      toast.error(error.toString())
    }
  }, [createSpot, navigate])

  return <>
  <div className="d-flex mb-3">
    <NavLink className="d-flex align-items-center gap-2 align-self-start" to="/user/spots"><FaArrowLeft />Spots</NavLink>
  </div>
  <SpotForm onSubmit={doCreateSpot} />
</>
}
