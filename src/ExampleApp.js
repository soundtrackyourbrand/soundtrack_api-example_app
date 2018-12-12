import React from 'react';

import {
  QueryRenderer,
  graphql
} from 'react-relay';

import environment from './createRelayEnvironment';
import AccountList from './AccountList';
import CircularProgress from 'material-ui/CircularProgress';

class ExampleApp extends React.Component {
  render() {
    return (
      <div>
        <h2>Accounts and Sound Zones</h2>
        <QueryRenderer
          environment={environment}
          variables={{
            zonePageSize: 5,
            accountCount: 5
          }}
          query={graphql`
            query ExampleAppQuery(
              $zonePageSize: Int!,
              $accountCount: Int!,
              $cursor: String
            ) {
              me {
                ...AccountList
              }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>;
            } else if (props) {
              return <AccountList data={props.me} />;
            }
            return <CircularProgress size={80} />
          }}
        />
      </div>
    );
  }
}

export default ExampleApp;
