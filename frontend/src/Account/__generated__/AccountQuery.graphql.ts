/**
 * @generated SignedSource<<e2353fe152968bcf3c11450af90db721>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AccountQuery$variables = Record<PropertyKey, never>;
export type AccountQuery$data = {
  readonly viewer: {
    readonly " $fragmentSpreads": FragmentRefs<"UpdateUserViewerFragment">;
  } | null | undefined;
};
export type AccountQuery = {
  response: AccountQuery$data;
  variables: AccountQuery$variables;
};

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UpdateUserViewerFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AccountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
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
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "004e664ae8d4df2e9736c9448245703e",
    "id": null,
    "metadata": {},
    "name": "AccountQuery",
    "operationKind": "query",
    "text": "query AccountQuery {\n  viewer {\n    ...UpdateUserViewerFragment\n  }\n}\n\nfragment UpdateUserFormViewerFragment on User {\n  callsign\n  email\n  unconfirmedEmail\n}\n\nfragment UpdateUserViewerFragment on User {\n  ...UpdateUserFormViewerFragment\n}\n"
  }
};

(node as any).hash = "65f934baf1ce057a4bb102caf1f26fd3";

export default node;
