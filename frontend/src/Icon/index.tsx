import Styles from "./index.module.scss"
import Rock from "./rock.svg"
import { FaWheelchair } from "react-icons/fa"
import { GiBabyFace, GiCityCar, GiDozen, GiForest, GiHolyOak, GiHut, GiParkBench, GiTable } from "react-icons/gi"

type Icon = "childFriendly" |
  "crowded" |
  "parking" |
  "rocky" |
  "scenic" |
  "sheltered" |
  "sitting" |
  "table" |
  "trees" |
  "wheelchairAccessible"

interface Props {
  icon: Icon
}

export const Icon = ({icon}: Props) => {
  return <span className={Styles.icon}>
    {icon === "childFriendly" && <GiBabyFace title="Child friendly" />}
    {icon === "crowded" && <GiDozen title="Crowded" />}
    {icon === "parking" && <GiCityCar title="Parking" />}
    {icon === "rocky" && <img alt="Rocky" src={Rock} />}
    {icon === "scenic" && <GiHolyOak title="Scenic" />}
    {icon === "sheltered" && <GiHut title="Sheltered" />}
    {icon === "sitting" && <GiParkBench title="Sitting" />}
    {icon === "table" && <GiTable title="Table" />}
    {icon === "trees" && <GiForest title="Trees" />}
    {icon === "wheelchairAccessible" && <FaWheelchair title="Wheelchair accessible" />}
  </span>
}
