import {createFetcher, createSubscriber} from '@absinthe/socket-relay'
import absintheSocket from './absintheSocket';

import {
  Environment,
  Network,
  RecordSource,
  Store,
} from 'relay-runtime';

// Create a network layer from the fetch function
const network = Network.create(createFetcher(absintheSocket), createSubscriber(absintheSocket));

const source = new RecordSource();
const store = new Store(source);

export default new Environment({
  network,
  store,
});
