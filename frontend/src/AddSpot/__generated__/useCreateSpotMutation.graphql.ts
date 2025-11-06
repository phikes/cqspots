/**
 * @generated SignedSource<<d0b397f9c1796c73c61e4064535cf593>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useCreateSpotMutation$variables = {
  childFriendly: boolean;
  crowded: boolean;
  description?: string | null | undefined;
  lat: number;
  long: number;
  parking: boolean;
  rocky: boolean;
  scenic: boolean;
  sheltered: boolean;
  sitting: boolean;
  table: boolean;
  trees: boolean;
  wheelchairAccessible: boolean;
};
export type useCreateSpotMutation$data = {
  readonly createSpot: {
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
export type useCreateSpotMutation = {
  response: useCreateSpotMutation$data;
  variables: useCreateSpotMutation$variables;
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
  "name": "crowded"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "description"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "lat"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "long"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "parking"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "rocky"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "scenic"
},
v8 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sheltered"
},
v9 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sitting"
},
v10 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "table"
},
v11 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "trees"
},
v12 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "wheelchairAccessible"
},
v13 = [
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
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "errors",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "childFriendly",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "description",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "crowded",
  "storageKey": null
},
v18 = {
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
v19 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "parking",
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rocky",
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "scenic",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sheltered",
  "storageKey": null
},
v23 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sitting",
  "storageKey": null
},
v24 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "table",
  "storageKey": null
},
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "trees",
  "storageKey": null
},
v26 = {
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
      (v12/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useCreateSpotMutation",
    "selections": [
      {
        "alias": null,
        "args": (v13/*: any*/),
        "concreteType": "CreateSpotPayload",
        "kind": "LinkedField",
        "name": "createSpot",
        "plural": false,
        "selections": [
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Spot",
            "kind": "LinkedField",
            "name": "spot",
            "plural": false,
            "selections": [
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/)
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
      (v2/*: any*/),
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v8/*: any*/),
      (v9/*: any*/),
      (v10/*: any*/),
      (v11/*: any*/),
      (v12/*: any*/)
    ],
    "kind": "Operation",
    "name": "useCreateSpotMutation",
    "selections": [
      {
        "alias": null,
        "args": (v13/*: any*/),
        "concreteType": "CreateSpotPayload",
        "kind": "LinkedField",
        "name": "createSpot",
        "plural": false,
        "selections": [
          (v14/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Spot",
            "kind": "LinkedField",
            "name": "spot",
            "plural": false,
            "selections": [
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/),
              (v19/*: any*/),
              (v20/*: any*/),
              (v21/*: any*/),
              (v22/*: any*/),
              (v23/*: any*/),
              (v24/*: any*/),
              (v25/*: any*/),
              (v26/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6c04a4b86b09e99442e7c2b9613792d2",
    "id": null,
    "metadata": {},
    "name": "useCreateSpotMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateSpotMutation(\n  $description: String\n  $childFriendly: Boolean!\n  $crowded: Boolean!\n  $lat: Float!\n  $long: Float!\n  $parking: Boolean!\n  $rocky: Boolean!\n  $scenic: Boolean!\n  $sheltered: Boolean!\n  $sitting: Boolean!\n  $table: Boolean!\n  $trees: Boolean!\n  $wheelchairAccessible: Boolean!\n) {\n  createSpot(input: {childFriendly: $childFriendly, crowded: $crowded, description: $description, lat: $lat, long: $long, parking: $parking, rocky: $rocky, scenic: $scenic, sheltered: $sheltered, sitting: $sitting, table: $table, trees: $trees, wheelchairAccessible: $wheelchairAccessible}) {\n    errors\n    spot {\n      childFriendly\n      description\n      crowded\n      lonlat {\n        x\n        y\n      }\n      parking\n      rocky\n      scenic\n      sheltered\n      sitting\n      table\n      trees\n      wheelchairAccessible\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "9a610f2532aa03ab80dc2277a7b57923";

export default node;
