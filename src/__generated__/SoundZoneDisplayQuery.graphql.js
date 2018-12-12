/**
 * @flow
 * @relayHash a5737b9ae1ded6bc9a977b77693a189d
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type NowPlayingDisplay$ref = any;
export type SoundZoneDisplayQueryVariables = {|
  soundZone: string,
|};
export type SoundZoneDisplayQueryResponse = {|
  +soundZone: ?{|
    +id: string,
    +nowPlaying: ?{|
      +$fragmentRefs: NowPlayingDisplay$ref,
    |},
  |},
|};
*/


/*
query SoundZoneDisplayQuery(
  $soundZone: ID!
) {
  soundZone(id: $soundZone) {
    id
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
    "name": "soundZone",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "soundZone",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SoundZoneDisplayQuery",
  "id": null,
  "text": "query SoundZoneDisplayQuery(\n  $soundZone: ID!\n) {\n  soundZone(id: $soundZone) {\n    id\n    nowPlaying {\n      ...NowPlayingDisplay\n    }\n  }\n}\n\nfragment NowPlayingDisplay on NowPlaying {\n  track {\n    name\n    artists {\n      name\n    }\n    album {\n      image {\n        url\n        width\n        height\n      }\n    }\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SoundZoneDisplayQuery",
    "type": "RootQueryType",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "soundZone",
        "storageKey": null,
        "args": v1,
        "concreteType": "SoundZone",
        "plural": false,
        "selections": [
          v2,
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
    "name": "SoundZoneDisplayQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "soundZone",
        "storageKey": null,
        "args": v1,
        "concreteType": "SoundZone",
        "plural": false,
        "selections": [
          v2,
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
                  v3,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "artists",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Artist",
                    "plural": true,
                    "selections": [
                      v3
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
                  v2
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
(node/*: any*/).hash = '4eb1a209a3b74a9f4748d4562c697ad8';
module.exports = node;
