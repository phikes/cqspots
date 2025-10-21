/**
 * @generated SignedSource<<a167944196efbe60173556e222fbc1db>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpotFragment$data = {
  readonly childFriendly: boolean;
  readonly crowded: boolean;
  readonly description: string | null | undefined;
  readonly id: string;
  readonly parking: boolean;
  readonly rocky: boolean;
  readonly scenic: boolean;
  readonly sheltered: boolean;
  readonly sitting: boolean;
  readonly table: boolean;
  readonly trees: boolean;
  readonly user: {
    readonly callsign: string | null | undefined;
  };
  readonly wheelchairAccessible: boolean;
  readonly " $fragmentType": "SpotFragment";
};
export type SpotFragment$key = {
  readonly " $data"?: SpotFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpotFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpotFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "childFriendly",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "crowded",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "parking",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rocky",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "scenic",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sheltered",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "sitting",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "table",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "trees",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "user",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "callsign",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "wheelchairAccessible",
      "storageKey": null
    }
  ],
  "type": "Spot",
  "abstractKey": null
};

(node as any).hash = "e53bdfd3e54513d10fad63ebb61fb7a0";

export default node;
