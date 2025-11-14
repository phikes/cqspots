import { LocateControl as LeafletLocateControl  } from "leaflet.locatecontrol"
import "leaflet.locatecontrol/dist/L.Control.Locate.min.css"
import { useEffect, useMemo } from "react"
import { useMap } from "react-leaflet"

export const LocateControl = () => {
  const locateControl = useMemo(() => new LeafletLocateControl(), [])
  const map = useMap()

  useEffect(() => {
    map.addControl(locateControl)

    return () => {
      map.removeControl(locateControl)
    }
  }, [locateControl, map])

  return null
}
