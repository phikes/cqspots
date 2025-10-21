import { useEffect, useMemo } from "react"

import { GeoSearchControl, OpenStreetMapProvider  } from "leaflet-geosearch"
import { useMap  } from "react-leaflet";

export const Search = () => {
  const searchControl = useMemo(() => new GeoSearchControl({
    provider: new OpenStreetMapProvider()
  }), [])

  const map = useMap()

  useEffect(() => {
    map.addControl(searchControl)

    return () => map.removeControl(searchControl)
  }, [map]);

  return null
}
