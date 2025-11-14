import { MapContainer, Marker, TileLayer } from "react-leaflet"
import Styles from "./index.module.scss"
import { LocateControl } from "@/LocateControl"
import { Search } from "@/Search"
import { useMemo, useRef } from "react"
import { useFormikContext } from "formik"
import { type Values } from ".."
import { PlaceMarker } from "./PlaceMarker"
import type { Marker as LeafletMarker } from "leaflet"

interface Props {
  center: [number, number]
}

export const FormMap = ({ center }: Props) => {
  const { setFieldValue, values: { lat, long } } = useFormikContext<Values>()

  const markerRef = useRef<LeafletMarker>(null)
  const eventHandlers = useMemo(() => ({
    dragend: () => {
      if (markerRef.current === null) return

      const latLng = markerRef.current.getLatLng()
      setFieldValue("lat", latLng.lat)
      setFieldValue("long", latLng.lng)
    },
  }), [setFieldValue])

  const position: ([number, number] | null) = useMemo(() => typeof lat === "number" && typeof long === "number" ? [lat, long] : null, [lat, long])

  return <MapContainer
    center={center}
    className={Styles.map}
    // @ts-expect-error Loading control otherwise is not available
    loadingControl
    preferCanvas
    zoom={3}
  >

  <LocateControl  />
  <PlaceMarker />
  <Search />
  {
    position &&
    <Marker
      draggable
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    />
  }

  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
}
