import cx from "classnames"
import Styles from "./index.module.scss"
import { graphql } from "relay-runtime"
import type { SpotFragment$key } from "./__generated__/SpotFragment.graphql"
import { useFragment } from "react-relay"
import { GiBabyFace, GiCityCar, GiDozen, GiForest, GiHolyOak, GiHut, GiParkBench, GiTable } from "react-icons/gi"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { useId, type PropsWithChildren } from "react"
import BootstrapTooltip from "react-bootstrap/Tooltip"
import Rock from "./rock.svg"
import { FaWheelchair } from "react-icons/fa"
import { DiscussionEmbed } from "disqus-react"

const spotFragment = graphql`
fragment SpotFragment on Spot {
  childFriendly
  crowded
  description
  id
  parking
  rocky
  scenic
  sheltered
  sitting
  table
  trees
  user {
    callsign
  }
  wheelchairAccessible
}
`

const Tooltip = ({ children, description }: PropsWithChildren<{description: string}>) => <OverlayTrigger
  overlay={<BootstrapTooltip id={useId()}>{description}</BootstrapTooltip>}
  placement="bottom"
>
  <div>{children}</div>
</OverlayTrigger>

interface Props {
  spotRef: SpotFragment$key
}

export const Spot = ({ spotRef }: Props) => {
  const spot = useFragment(spotFragment, spotRef)

  return <>
    {spot.user.callsign?.length && <p className="mt-0 mb-3"><small>Added by <a href={`https://qrz.com/db/${spot.user.callsign}`} target="_blank" rel="noopener noreferrer">{spot.user.callsign}</a></small></p>}
    <h1 className="h4">Details</h1>
    <div className={cx("d-flex gap-1 mb-3", Styles.icons)}>
      {spot.childFriendly && <Tooltip description="Child friendly"><GiBabyFace title="Child friendly" /></Tooltip>}
      {spot.crowded && <Tooltip description="Crowded"><GiDozen title="Crowded" /></Tooltip>}
      {spot.parking && <Tooltip description="Parking"><GiCityCar title="Parking" /></Tooltip>}
      {spot.rocky && <Tooltip description="Rocky"><img alt="Rocky" src={Rock} /></Tooltip>}
      {spot.scenic && <Tooltip description="Scenic"><GiHolyOak title="Scenic" /></Tooltip>}
      {spot.sheltered && <Tooltip description="Sheltered"><GiHut title="Sheltered" /></Tooltip>}
      {spot.sitting && <Tooltip description="Sitting"><GiParkBench title="Sitting" /></Tooltip>}
      {spot.table && <Tooltip description="Table"><GiTable title="Table" /></Tooltip>}
      {spot.trees && <Tooltip description="Trees"><GiForest title="Trees" /></Tooltip>}
      {spot.wheelchairAccessible && <Tooltip description="Wheelchair accessible"><FaWheelchair title="Wheelchair accessible" /></Tooltip>}
    </div>
    <h2 className="h5">Description</h2>
    <p>{spot.description}</p>
    <hr />
    <DiscussionEmbed
      config={{
        identifier: spot.id,
        url: `https://cqspots.com/spots/${spot.id}`,
      }}
      shortname="cqspots"
    />
  </>
}
