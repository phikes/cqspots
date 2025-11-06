import { useMapEvent } from "react-leaflet"
import { type LeafletMouseEvent } from "leaflet"
import { useFormikContext } from "formik"
import { type Values } from "@/SpotForm"

export const PlaceMarker = () => {
  const { setFieldValue } = useFormikContext<Values>()

  useMapEvent("click", (event: LeafletMouseEvent) => {
    setFieldValue("lat", event.latlng.lat)
    setFieldValue("long", event.latlng.lng)
  })

  return null
}
