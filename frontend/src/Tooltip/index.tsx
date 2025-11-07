import { type PropsWithChildren, useId } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import BootstrapTooltip from "react-bootstrap/Tooltip"

export const Tooltip = ({ children, description }: PropsWithChildren<{description: string}>) => <OverlayTrigger
  overlay={<BootstrapTooltip id={useId()}>{description}</BootstrapTooltip>}
  placement="bottom"
>
  <div>{children}</div>
</OverlayTrigger>
