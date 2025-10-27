/**
 * @generated SignedSource<<c1dbc9d41edb77ce7aad73ad87da5430>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserViewerFragment$data = {
  readonly callsign: string | null | undefined;
  readonly email: string;
  readonly " $fragmentType": "UserViewerFragment";
};
export type UserViewerFragment$key = {
  readonly " $data"?: UserViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserViewerFragment",
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

(node as any).hash = "27715ef9a29a975bbb05ce973cc7ab9a";

export default node;
