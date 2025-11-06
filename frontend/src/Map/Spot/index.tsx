import cx from "classnames"
import Styles from "./index.module.scss"
import { graphql } from "relay-runtime"
import type { SpotFragment$key } from "./__generated__/SpotFragment.graphql"
import { useFragment } from "react-relay"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import { useId, type PropsWithChildren } from "react"
import BootstrapTooltip from "react-bootstrap/Tooltip"
import { DiscussionEmbed } from "disqus-react"
import { Icon } from "@/Icon"
import Markdown from "react-markdown"

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
  {(spot.user.callsign?.length ?? 0) > 0 && <p className="mt-0 mb-3"><small>Added by <a href={`https://qrz.com/db/${spot.user.callsign}`} target="_blank" rel="noopener noreferrer">{spot.user.callsign}</a></small></p>}
    <h1 className="h4">Details</h1>
    <div className={cx("d-flex gap-1 mb-3", Styles.icons)}>
      {spot.childFriendly && <Tooltip description="Child friendly"><Icon icon="childFriendly" /></Tooltip>}
      {spot.crowded && <Tooltip description="Crowded"><Icon icon="crowded" /></Tooltip>}
      {spot.parking && <Tooltip description="Parking"><Icon icon="parking" /></Tooltip>}
      {spot.rocky && <Tooltip description="Rocky"><Icon icon="rocky" /></Tooltip>}
      {spot.scenic && <Tooltip description="Scenic"><Icon icon="scenic" /></Tooltip>}
      {spot.sheltered && <Tooltip description="Sheltered"><Icon icon="sheltered" /></Tooltip>}
      {spot.sitting && <Tooltip description="Sitting"><Icon icon="sitting" /></Tooltip>}
      {spot.table && <Tooltip description="Table"><Icon icon="table" /></Tooltip>}
      {spot.trees && <Tooltip description="Trees"><Icon icon="trees" /></Tooltip>}
      {spot.wheelchairAccessible && <Tooltip description="Wheelchair accessible"><Icon icon="wheelchairAccessible" /></Tooltip>}
    </div>
    <h2 className="h5">Description</h2>
    <Markdown>
      {spot.description}
    </Markdown>
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
