/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type SoundZoneList$ref = any;
import type { FragmentReference } from 'relay-runtime';
declare export opaque type AccountList$ref: FragmentReference;
export type AccountList = {|
  +accounts: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +businessName: ?string,
        +$fragmentRefs: SoundZoneList$ref,
      |},
    |}>,
  |},
  +$refType: AccountList$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "AccountList",
  "type": "PublicAPIClient",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "accountCount",
      "type": "Int"
    }
  ],
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
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "id",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "businessName",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "FragmentSpread",
                  "name": "SoundZoneList",
                  "args": null
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};
(node/*: any*/).hash = 'e5b7b8d5fd2f703ec551af93f4c4e42b';
module.exports = node;
