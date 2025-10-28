/**
 * @generated SignedSource<<ed454b5cabdb5bce3f97a38b74bb2954>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateUserFormViewerFragment$data = {
  readonly callsign: string | null | undefined;
  readonly email: string;
  readonly unconfirmedEmail: string | null | undefined;
  readonly " $fragmentType": "UpdateUserFormViewerFragment";
};
export type UpdateUserFormViewerFragment$key = {
  readonly " $data"?: UpdateUserFormViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UpdateUserFormViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdateUserFormViewerFragment",
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "unconfirmedEmail",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "54b201a4557ed8ec64c15b13fbc09100";

export default node;
