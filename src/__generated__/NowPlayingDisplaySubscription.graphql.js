/**
 * @flow
 * @relayHash ca13e07777544d070ede67f4da88951c
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NowPlayingDisplay$ref = any;
export type NowPlayingDisplaySubscriptionVariables = {|
  input: {
    soundZone: string,
  },
|};
export type NowPlayingDisplaySubscriptionResponse = {|
  +nowPlayingUpdate: ?{|
    +nowPlaying: ?{|
      +$fragmentRefs: NowPlayingDisplay$ref,
    |},
  |},
|};
*/


/*
subscription NowPlayingDisplaySubscription(
  $input: NowPlayingUpdateInput!
) {
  nowPlayingUpdate(input: $input) {
    nowPlaying {
      ...NowPlayingDisplay
    }
  }
}

fragment NowPlayingDisplay on NowPlaying {
  track {
    name
    artists {
      name
    }
    album {
      image {
        url
        width
        height
      }
    }
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "NowPlayingUpdateInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "NowPlayingUpdateInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "NowPlayingDisplaySubscription",
  "id": null,
  "text": "subscription NowPlayingDisplaySubscription(\n  $input: NowPlayingUpdateInput!\n) {\n  nowPlayingUpdate(input: $input) {\n    nowPlaying {\n      ...NowPlayingDisplay\n    }\n  }\n}\n\nfragment NowPlayingDisplay on NowPlaying {\n  track {\n    name\n    artists {\n      name\n    }\n    album {\n      image {\n        url\n        width\n        height\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NowPlayingDisplaySubscription",
    "type": "RootSubscriptionType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nowPlayingUpdate",
        "storageKey": null,
        "args": v1,
        "concreteType": "NowPlayingUpdatePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nowPlaying",
            "storageKey": null,
            "args": null,
            "concreteType": "NowPlaying",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "NowPlayingDisplay",
                "args": null
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "NowPlayingDisplaySubscription",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "nowPlayingUpdate",
        "storageKey": null,
        "args": v1,
        "concreteType": "NowPlayingUpdatePayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "nowPlaying",
            "storageKey": null,
            "args": null,
            "concreteType": "NowPlaying",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "track",
                "storageKey": null,
                "args": null,
                "concreteType": "Track",
                "plural": false,
                "selections": [
                  v2,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "artists",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Artist",
                    "plural": true,
                    "selections": [
                      v2
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "album",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Album",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "image",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "Image",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "url",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "width",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "height",
                            "args": null,
                            "storageKey": null
                          }
                        ]
                      }
                    ]
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
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
(node/*: any*/).hash = '3dfb0fd4410969fa85208f0243fd1082';
module.exports = node;
