import { useEffect } from "react"
import { useMap } from "react-leaflet"

interface Props {
  loading: boolean
}

export const DataLoading = ({loading}: Props) => {
  const map = useMap()

  useEffect(() => {
    if (loading) map.fire("dataloading")
    else map.fire("dataload")
  }, [loading, map])

  return null
}
