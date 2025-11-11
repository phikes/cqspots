/**
 * @generated SignedSource<<47f587d22a3c5332c9ce6bfa5c6fc42b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useUpdateSpotMutation$variables = {
  childFriendly: boolean;
  connections: ReadonlyArray<string>;
  crowded: boolean;
  description?: string | null | undefined;
  lat: number;
  long: number;
  parking: boolean;
  references?: ReadonlyArray<string> | null | undefined;
  rocky: boolean;
  scenic: boolean;
  sheltered: boolean;
  sitting: boolean;
  spotId: string;
  table: boolean;
  trees: boolean;
  wheelchairAccessible: boolean;
};
export type useUpdateSpotMutation$data = {
  readonly updateSpot: {
    readonly errors: ReadonlyArray<string> | null | undefined;
    readonly spot: {
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
    } | null | undefined;
  } | null | undefined;
};
export type useUpdateSpotMutation = {
  response: useUpdateSpotMutation$data;
  variables: useUpdateSpotMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "childFriendly"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "crowded"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lat"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "long"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "parking"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "references"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rocky"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "scenic"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sheltered"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sitting"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "spotId"
},
v13 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "table"
},
v14 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "trees"
},
v15 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "wheelchairAccessible"
},
v16 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "childFriendly",
        "variableName": "childFriendly"
      },
      {
        "kind": "Variable",
        "name": "crowded",
        "variableName": "crowded"
      },
      {
        "kind": "Variable",
        "name": "description",
        "variableName": "description"
      },
      {
        "kind": "Variable",
        "name": "lat",
        "variableName": "lat"
      },
      {
        "kind": "Variable",
        "name": "long",
        "variableName": "long"
      },
      {
        "kind": "Variable",
        "name": "parking",
        "variableName": "parking"
      },
      {
        "kind": "Variable",
        "name": "references",
        "variableName": "references"
      },
      {
        "kind": "Variable",
        "name": "rocky",
        "variableName": "rocky"
      },
      {
        "kind": "Variable",
        "name": "scenic",
        "variableName": "scenic"
      },
      {
        "kind": "Variable",
        "name": "sheltered",
        "variableName": "sheltered"
      },
      {
        "kind": "Variable",
        "name": "sitting",
        "variableName": "sitting"
      },
      {
        "kind": "Variable",
        "name": "spotId",
        "variableName": "spotId"
      },
      {
        "kind": "Variable",
        "name": "table",
        "variableName": "table"
      },
      {
        "kind": "Variable",
        "name": "trees",
        "variableName": "trees"
      },
      {
        "kind": "Variable",
        "name": "wheelchairAccessible",
        "variableName": "wheelchairAccessible"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "errors",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "childFriendly",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "crowded",
  "storageKey": null
},
v21 = {
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
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "parking",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "references",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rocky",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "scenic",
  "storageKey": null
},
v26 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sheltered",
  "storageKey": null
},
v27 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sitting",
  "storageKey": null
},
v28 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "table",
  "storageKey": null
},
v29 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "trees",
  "storageKey": null
},
v30 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "wheelchairAccessible",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v14/*: any*/),
      (v15/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdateSpotMutation",
    "selections": [
      {
        "alias": null,
        "args": (v16/*: any*/),
        "concreteType": "UpdateSpotPayload",
        "kind": "LinkedField",
        "name": "updateSpot",
        "plural": false,
        "selections": [
          (v17/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Spot",
            "kind": "LinkedField",
            "name": "spot",
            "plural": false,
            "selections": [
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/),
              (v27/*: any*/),
              (v28/*: any*/),
              (v29/*: any*/),
              (v30/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/),
      (v13/*: any*/),
      (v14/*: any*/),
      (v15/*: any*/)
    ],
    "kind": "Operation",
    "name": "useUpdateSpotMutation",
    "selections": [
      {
        "alias": null,
        "args": (v16/*: any*/),
        "concreteType": "UpdateSpotPayload",
        "kind": "LinkedField",
        "name": "updateSpot",
        "plural": false,
        "selections": [
          (v17/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Spot",
            "kind": "LinkedField",
            "name": "spot",
            "plural": false,
            "selections": [
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/),
              (v27/*: any*/),
              (v28/*: any*/),
              (v29/*: any*/),
              (v30/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "spot",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "SpotEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d3e07c5aab730bd6cd81787575ead78b",
    "id": null,
    "metadata": {},
    "name": "useUpdateSpotMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateSpotMutation(\n  $description: String\n  $childFriendly: Boolean!\n  $crowded: Boolean!\n  $lat: Float!\n  $long: Float!\n  $parking: Boolean!\n  $references: [String!]\n  $rocky: Boolean!\n  $scenic: Boolean!\n  $sheltered: Boolean!\n  $sitting: Boolean!\n  $spotId: ID!\n  $table: Boolean!\n  $trees: Boolean!\n  $wheelchairAccessible: Boolean!\n) {\n  updateSpot(input: {childFriendly: $childFriendly, crowded: $crowded, description: $description, lat: $lat, long: $long, parking: $parking, references: $references, rocky: $rocky, scenic: $scenic, sheltered: $sheltered, sitting: $sitting, spotId: $spotId, table: $table, trees: $trees, wheelchairAccessible: $wheelchairAccessible}) {\n    errors\n    spot {\n      childFriendly\n      description\n      crowded\n      lonlat {\n        x\n        y\n      }\n      parking\n      references\n      rocky\n      scenic\n      sheltered\n      sitting\n      table\n      trees\n      wheelchairAccessible\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "174eb1343238bb3238be62a8b9167ad5";

export default node;
