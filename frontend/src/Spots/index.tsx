import { FaPlus } from "react-icons/fa"
import { NavLink } from "react-router"

export const Spots = () => {
  return <div className="d-flex flex-column">
    <h1 className="h3">Spots</h1>
    <NavLink className="align-self-start btn btn-sm btn-primary d-flex align-items-center gap-1" to="/user/spots/add">
      <FaPlus />
      Add spot
    </NavLink>
</div>
}
