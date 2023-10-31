import React from 'react';

import {
  createFragmentContainer
} from 'react-relay';

import graphql from 'babel-plugin-relay/macro';

import SoundZoneList from './SoundZoneList';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class AccountList extends React.Component {
  render() {
    return (
    <div>
      <List>
        {this.props.data.accounts.edges.map(edge => (
          <ListItem key={edge.node.id}>
            <h4>{edge.node.businessName}</h4>
            <SoundZoneList data={edge.node} />
            <Divider />
          </ListItem>
        ))}
      </List>
    </div>
    );
  }
}

export default createFragmentContainer(
  AccountList,
  graphql`
    fragment AccountList on PublicAPIClient {
      accounts(first: $accountCount, orderBy: {field: BUSINESS_NAME, direction: ASC }) {
        edges {
          node {
            id
            businessName
            ...SoundZoneList
          }
        }
      }
    }
  `
);
