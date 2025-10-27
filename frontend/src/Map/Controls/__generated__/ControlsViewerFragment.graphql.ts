/**
 * @generated SignedSource<<d3642cee15bf42ab20df068153a5ab72>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ControlsViewerFragment$data = {
  readonly callsign: string | null | undefined;
  readonly email: string;
  readonly " $fragmentType": "ControlsViewerFragment";
};
export type ControlsViewerFragment$key = {
  readonly " $data"?: ControlsViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"ControlsViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ControlsViewerFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "callsign",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "01ac8667ab43ee5ee5cb81a44395b284";

export default node;
