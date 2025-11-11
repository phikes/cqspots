import { MapContainer, Marker, TileLayer } from "react-leaflet"
import Styles from "./index.module.scss"
import { LocateControl } from "@/LocateControl"
import { Search } from "@/Search"
import { useMemo, useRef } from "react"
import { useFormikContext } from "formik"
import { type Values } from ".."
import { PlaceMarker } from "./PlaceMarker"

interface Props {
  center: [number, number]
}

export const FormMap = ({ center }: Props) => {
  const { setFieldValue, values: { lat, long } } = useFormikContext<Values>()

  const markerRef = useRef<any>(null)
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
    // @ts-ignore
    center={center}
    className={Styles.map}
    // @ts-ignore
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
      // @ts-ignore
      draggable
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    />
  }

  <TileLayer
    // @ts-ignore
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
}
