/**
 * @generated SignedSource<<287af37c32c47c93b8fa4128e2052d84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type useDeleteSpotMutation$variables = {
  connections: ReadonlyArray<string>;
  id: string;
};
export type useDeleteSpotMutation$data = {
  readonly deleteSpot: {
    readonly spot: {
      readonly id: string;
    } | null | undefined;
  } | null | undefined;
};
export type useDeleteSpotMutation = {
  response: useDeleteSpotMutation$data;
  variables: useDeleteSpotMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "spotId",
        "variableName": "id"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useDeleteSpotMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteSpotPayload",
        "kind": "LinkedField",
        "name": "deleteSpot",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Spot",
            "kind": "LinkedField",
            "name": "spot",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useDeleteSpotMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteSpotPayload",
        "kind": "LinkedField",
        "name": "deleteSpot",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Spot",
            "kind": "LinkedField",
            "name": "spot",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteEdge",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
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
    "cacheID": "1c4c627640ac6bcfc73cdb310521209a",
    "id": null,
    "metadata": {},
    "name": "useDeleteSpotMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteSpotMutation(\n  $id: ID!\n) {\n  deleteSpot(input: {spotId: $id}) {\n    spot {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "ac71d361f01a2fa743e89aaa98aaad99";

export default node;
