/**
 * @generated SignedSource<<6a976bcace958b7d3ee6a310b0379c47>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MapQueryFragment$data = {
  readonly spots: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly lonlat: {
          readonly x: number;
          readonly y: number;
        };
        readonly " $fragmentSpreads": FragmentRefs<"SpotFragment">;
      };
    }>;
  };
  readonly " $fragmentType": "MapQueryFragment";
};
export type MapQueryFragment$key = {
  readonly " $data"?: MapQueryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MapQueryFragment">;
};

import MapPaginationQuery_graphql from './MapPaginationQuery.graphql';

const node: ReaderFragment = (function(){
var v0 = [
  "spots"
];
return {
  "argumentDefinitions": [
    {
      "defaultValue": 500,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": MapPaginationQuery_graphql
    }
  },
  "name": "MapQueryFragment",
  "selections": [
    {
      "alias": "spots",
      "args": null,
      "concreteType": "SpotConnection",
      "kind": "LinkedField",
      "name": "__Map_spots_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "SpotEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "SpotFragment"
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
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "89e0f29afd995c2946f422eec2a78f31";

export default node;
