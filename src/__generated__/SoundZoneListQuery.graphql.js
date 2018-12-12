/**
 * @flow
 * @relayHash b61779d42caf7ea497c97b7e8e1ff44b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type SoundZoneList$ref = any;
export type SoundZoneListQueryVariables = {|
  zonePageSize: number,
  cursor?: ?string,
  account: string,
|};
export type SoundZoneListQueryResponse = {|
  +node: ?{|
    +$fragmentRefs: SoundZoneList$ref,
  |},
|};
*/


/*
query SoundZoneListQuery(
  $zonePageSize: Int!
  $cursor: String
  $account: ID!
) {
  node(id: $account) {
    __typename
    ...SoundZoneList
    id
  }
}

fragment SoundZoneList on Account {
  id
  soundZones(first: $zonePageSize, after: $cursor) {
    edges {
      node {
        id
        name
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "zonePageSize",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "account",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "account",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SoundZoneListQuery",
  "id": null,
  "text": "query SoundZoneListQuery(\n  $zonePageSize: Int!\n  $cursor: String\n  $account: ID!\n) {\n  node(id: $account) {\n    __typename\n    ...SoundZoneList\n    id\n  }\n}\n\nfragment SoundZoneList on Account {\n  id\n  soundZones(first: $zonePageSize, after: $cursor) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SoundZoneListQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "SoundZoneList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "SoundZoneListQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": v1,
        "concreteType": null,
        "plural": false,
        "selections": [
          v2,
          v3,
          {
            "kind": "InlineFragment",
            "type": "Account",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "soundZones",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "zonePageSize",
                    "type": "Int"
                  }
                ],
                "concreteType": "SoundZoneConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "SoundZoneEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SoundZone",
                        "plural": false,
                        "selections": [
                          v3,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "name",
                            "args": null,
                            "storageKey": null
                          },
                          v2
                        ]
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "cursor",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "pageInfo",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "endCursor",
                        "args": null,
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "hasNextPage",
                        "args": null,
                        "storageKey": null
                      }
                    ]
                  }
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "soundZones",
                "args": [
                  {
                    "kind": "Variable",
                    "name": "after",
                    "variableName": "cursor",
                    "type": "String"
                  },
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "zonePageSize",
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "key": "Account_soundZones",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = 'e2b01931f86d8aa9d960fb75173adf2e';
module.exports = node;
