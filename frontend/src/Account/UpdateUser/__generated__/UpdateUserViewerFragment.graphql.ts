/**
 * @generated SignedSource<<64191b0f2e9b2ed4ccf6633820964fc6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdateUserViewerFragment$data = {
  readonly " $fragmentSpreads": FragmentRefs<"UpdateUserFormViewerFragment">;
  readonly " $fragmentType": "UpdateUserViewerFragment";
};
export type UpdateUserViewerFragment$key = {
  readonly " $data"?: UpdateUserViewerFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"UpdateUserViewerFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdateUserViewerFragment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "UpdateUserFormViewerFragment"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "048c894c641ca8fb5734b403e8106368";

export default node;
