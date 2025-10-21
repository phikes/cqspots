import Button from "react-bootstrap/Button"
import { FaPlus } from "react-icons/fa"

export const Controls = () => {
  return <div className="d-flex gap-2 leaflet-top leaflet-right p-2">
    <Button className="d-flex gap-1 align-items-center" size="sm" variant="primary"><FaPlus /> Add spot</Button>
    <Button size="sm" variant="primary">DL9PK</Button>
  </div>
}
