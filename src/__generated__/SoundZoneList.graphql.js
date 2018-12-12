/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type SoundZoneList$ref: FragmentReference;
export type SoundZoneList = {|
  +id: string,
  +soundZones: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: ?string,
      |},
    |}>,
  |},
  +$refType: SoundZoneList$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "SoundZoneList",
  "type": "Account",
  "metadata": {
    "connection": [
      {
        "count": "zonePageSize",
        "cursor": "cursor",
        "direction": "forward",
        "path": [
          "soundZones"
        ]
      }
    ]
  },
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "zonePageSize",
      "type": "Int"
    },
    {
      "kind": "RootArgument",
      "name": "cursor",
      "type": "String"
    }
  ],
  "selections": [
    v0,
    {
      "kind": "LinkedField",
      "alias": "soundZones",
      "name": "__Account_soundZones_connection",
      "storageKey": null,
      "args": null,
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
                v0,
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "name",
                  "args": null,
                  "storageKey": null
                },
                {
                  "kind": "ScalarField",
                  "alias": null,
                  "name": "__typename",
                  "args": null,
                  "storageKey": null
                }
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
    }
  ]
};
})();
(node/*: any*/).hash = '10ef93650e820e85acf99075dedd78e9';
module.exports = node;
