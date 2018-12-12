import React from 'react';

import {
  graphql,
  createPaginationContainer,
} from 'react-relay';

import RaisedButton from 'material-ui/RaisedButton';
import List from 'material-ui/List';

import SoundZone from './SoundZone';

class SoundZoneList extends React.Component {
  render() {
    let loadMore;
    if (this.props.relay.hasMore()) {
      loadMore = <RaisedButton label="Load more" onClick={() => this._loadMore()} />
    }

    return (<List>
      {this.props.data.soundZones.edges.map(edge => (
        <SoundZone key={edge.node.id} data={edge.node} />
      ))}
      {loadMore}
    </List>);
  }

  _loadMore() {
    if (!this.props.relay.hasMore() || this.props.relay.isLoading()) {
      return;
    }

    this.props.relay.loadMore(5);
  }
}

export default createPaginationContainer(
  SoundZoneList,
  graphql`
    fragment SoundZoneList on Account {
      id
      soundZones(first: $zonePageSize, after: $cursor) @connection(key: "Account_soundZones") {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `,
  {
    getVariables(prop, {count, cursor}, fragmentVariables) {
      return {
        zonePageSize: count,
        cursor: cursor,
        account: prop.data.id
      }
    },
    query: graphql`
      query SoundZoneListQuery(
        $zonePageSize: Int!,
        $cursor: String,
        $account: ID!
      ) {
        node(id: $account) {
          ...SoundZoneList
        }
      }
    `
  }
);

