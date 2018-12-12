/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from 'relay-runtime';
declare export opaque type NowPlayingDisplay$ref: FragmentReference;
export type NowPlayingDisplay = {|
  +track: ?{|
    +name: ?string,
    +artists: ?$ReadOnlyArray<?{|
      +name: ?string,
    |}>,
    +album: ?{|
      +image: ?{|
        +url: ?string,
        +width: ?number,
        +height: ?number,
      |},
    |},
  |},
  +$refType: NowPlayingDisplay$ref,
|};
*/


const node/*: ConcreteFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Fragment",
  "name": "NowPlayingDisplay",
  "type": "NowPlaying",
  "metadata": null,
  "argumentDefinitions": [],
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
        v0,
        {
          "kind": "LinkedField",
          "alias": null,
          "name": "artists",
          "storageKey": null,
          "args": null,
          "concreteType": "Artist",
          "plural": true,
          "selections": [
            v0
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
        }
      ]
    }
  ]
};
})();
(node/*: any*/).hash = 'b80d9d175432751fb61a8bef6d7e69e7';
module.exports = node;
