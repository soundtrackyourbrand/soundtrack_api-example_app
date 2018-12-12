/**
 * @flow
 * @relayHash ded9bc6645deec7fd2003eac894ec53c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SoundZoneDisplaySubscriptionVariables = {|
  input: {
    soundZone: string,
  },
|};
export type SoundZoneDisplaySubscriptionResponse = {|
  +soundZoneUpdate: ?{|
    +soundZone: ?{|
      +id: string,
      +name: ?string,
    |},
  |},
|};
*/


/*
subscription SoundZoneDisplaySubscription(
  $input: SoundZoneUpdateInput!
) {
  soundZoneUpdate(input: $input) {
    soundZone {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "SoundZoneUpdateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "soundZoneUpdate",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "SoundZoneUpdateInput!"
      }
    ],
    "concreteType": "SoundZoneUpdatePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "soundZone",
        "storageKey": null,
        "args": null,
        "concreteType": "SoundZone",
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
            "name": "name",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "SoundZoneDisplaySubscription",
  "id": null,
  "text": "subscription SoundZoneDisplaySubscription(\n  $input: SoundZoneUpdateInput!\n) {\n  soundZoneUpdate(input: $input) {\n    soundZone {\n      id\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SoundZoneDisplaySubscription",
    "type": "RootSubscriptionType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "SoundZoneDisplaySubscription",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
(node/*: any*/).hash = 'c57d03205b18f16cb9fc9b9c6671c92a';
module.exports = node;
