/**
 * @generated SignedSource<<c96fa136447cda995dcf0927d395cae9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpotListSpotFragment$data = ReadonlyArray<{
  readonly node: {
    readonly childFriendly: boolean;
    readonly crowded: boolean;
    readonly description: string | null | undefined;
    readonly id: string;
    readonly lonlat: {
      readonly x: number;
      readonly y: number;
    };
    readonly parking: boolean;
    readonly references: ReadonlyArray<string> | null | undefined;
    readonly rocky: boolean;
    readonly scenic: boolean;
    readonly sheltered: boolean;
    readonly sitting: boolean;
    readonly table: boolean;
    readonly trees: boolean;
    readonly wheelchairAccessible: boolean;
  };
  readonly " $fragmentType": "SpotListSpotFragment";
}>;
export type SpotListSpotFragment$key = ReadonlyArray<{
  readonly " $data"?: SpotListSpotFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpotListSpotFragment">;
}>;

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "SpotListSpotFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Spot",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
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
          "concreteType": "Point",
          "kind": "LinkedField",
          "name": "lonlat",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "x",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "y",
              "storageKey": null
            }
          ],
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
          "name": "references",
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
          "kind": "ScalarField",
          "name": "wheelchairAccessible",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SpotEdge",
  "abstractKey": null
};

(node as any).hash = "f0f1bc3d011055c4e5f6d87b884956a6";

export default node;
