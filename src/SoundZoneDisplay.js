import React from 'react';

import {
  QueryRenderer,
  graphql,
} from 'react-relay';

import environment from './createRelayEnvironment';
import NowPlayingDisplay from './NowPlayingDisplay';
import CircularProgress from 'material-ui/CircularProgress';

class SoundZoneDisplay extends React.Component {
  render() {
    return (
      <div>
        <QueryRenderer
          environment={environment}
          variables={{
            soundZone: this.props.soundZone
          }}
          query={graphql`
            query SoundZoneDisplayQuery(
              $soundZone: ID!
            ) {
              soundZone(id: $soundZone)  {
                id
                nowPlaying {
                  ...NowPlayingDisplay
                }
              }
            }
          `}

          render={({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <NowPlayingDisplay data={props.soundZone.nowPlaying} soundZone={props.soundZone.id} />
            }
            return  <CircularProgress />
          }}
        />
      </div>
    );
  }
}

export default SoundZoneDisplay
