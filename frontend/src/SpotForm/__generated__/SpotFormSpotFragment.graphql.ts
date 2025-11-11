/**
 * @generated SignedSource<<9dee4085c0f447bbc7bf67cef172d617>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type SpotFormSpotFragment$data = {
  readonly childFriendly: boolean;
  readonly crowded: boolean;
  readonly description: string | null | undefined;
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
  readonly " $fragmentType": "SpotFormSpotFragment";
};
export type SpotFormSpotFragment$key = {
  readonly " $data"?: SpotFormSpotFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"SpotFormSpotFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpotFormSpotFragment",
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
  "type": "Spot",
  "abstractKey": null
};

(node as any).hash = "287b7e10dc8e631200dfcd9c564e0f5a";

export default node;
