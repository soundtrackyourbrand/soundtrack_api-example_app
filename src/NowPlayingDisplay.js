import React from 'react';

import {
  createFragmentContainer,
  requestSubscription
} from 'react-relay';

import graphql from 'babel-plugin-relay/macro';

import environment from './createRelayEnvironment';
import { CardHeader } from 'material-ui/Card';


class NowPlayingDisplay extends React.Component {
  componentDidMount() {
    requestSubscription(
      environment,
      {
        subscription: subscription,
        variables: {input: {soundZone: this.props.soundZone}},
        updater: store => {
          const payload = store.getRootField('nowPlayingUpdate')
          const data = payload.getLinkedRecord('nowPlaying')

          store.get(this.props.soundZone).setLinkedRecord(data, 'nowPlaying')
       }
      }
    )
  }

  render() {
    if (!this.props.data || !this.props.data.track) {
      return <CardHeader title="Nothing playing right now" />
    }

    return <CardHeader
      title={this.props.data.track.name}
      subtitle={this.props.data.track.artists.map(artist => artist.name).join(', ')}
      avatar={this.props.data.track.album.image.url}
    />

  }
}

export default createFragmentContainer(
  NowPlayingDisplay,
  graphql`
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
      }
    }
  `
);

const subscription = 
  graphql`
    subscription NowPlayingDisplaySubscription($input: NowPlayingUpdateInput!) {
      nowPlayingUpdate(input: $input) {
        nowPlaying {
          ...NowPlayingDisplay
        }
      }
    }
  `
