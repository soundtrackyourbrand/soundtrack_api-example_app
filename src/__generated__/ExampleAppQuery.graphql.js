/**
 * @flow
 * @relayHash b051edeb3b6aea649d72ef6f378fb08b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type AccountList$ref = any;
export type ExampleAppQueryVariables = {|
  zonePageSize: number,
  accountCount: number,
  cursor?: ?string,
|};
export type ExampleAppQueryResponse = {|
  +me: ?{|
    +$fragmentRefs: AccountList$ref,
  |},
|};
*/


/*
query ExampleAppQuery(
  $zonePageSize: Int!
  $accountCount: Int!
  $cursor: String
) {
  me {
    __typename
    ...AccountList
    ... on Node {
      id
    }
    ... on User {
      id
    }
    ... on PublicAPIClient {
      id
    }
  }
}

fragment AccountList on PublicAPIClient {
  accounts(first: $accountCount) {
    edges {
      node {
        id
        businessName
        ...SoundZoneList
      }
    }
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
    "name": "accountCount",
    "type": "Int!",
    "defaultValue": null
  },
  {
    "kind": "LocalArgument",
    "name": "cursor",
    "type": "String",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "ExampleAppQuery",
  "id": null,
  "text": "query ExampleAppQuery(\n  $zonePageSize: Int!\n  $accountCount: Int!\n  $cursor: String\n) {\n  me {\n    __typename\n    ...AccountList\n    ... on Node {\n      id\n    }\n    ... on User {\n      id\n    }\n    ... on PublicAPIClient {\n      id\n    }\n  }\n}\n\nfragment AccountList on PublicAPIClient {\n  accounts(first: $accountCount) {\n    edges {\n      node {\n        id\n        businessName\n        ...SoundZoneList\n      }\n    }\n  }\n}\n\nfragment SoundZoneList on Account {\n  id\n  soundZones(first: $zonePageSize, after: $cursor) {\n    edges {\n      node {\n        id\n        name\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ExampleAppQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "AccountList",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "ExampleAppQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "me",
        "storageKey": null,
        "args": null,
        "concreteType": null,
        "plural": false,
        "selections": [
          v1,
          v2,
          {
            "kind": "InlineFragment",
            "type": "PublicAPIClient",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "accounts",
                "storageKey": null,
                "args": [
                  {
                    "kind": "Variable",
                    "name": "first",
                    "variableName": "accountCount",
                    "type": "Int"
                  }
                ],
                "concreteType": "PublicApiClientAccountsConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "PublicApiClientAccountsEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Account",
                        "plural": false,
                        "selections": [
                          v2,
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "businessName",
                            "args": null,
                            "storageKey": null
                          },
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
                                      v2,
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "name",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      v1
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
            ]
          }
        ]
      }
    ]
  }
};
})();
(node/*: any*/).hash = '9c7633c09bbe9790d236f173df01b914';
module.exports = node;
