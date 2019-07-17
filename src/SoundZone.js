import React from 'react';

import {
  requestSubscription,
} from 'react-relay';

import graphql from 'babel-plugin-relay/macro';

import environment from './createRelayEnvironment';
import SoundZoneDisplay from './SoundZoneDisplay';

import ListItem from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

class SoundZone extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      showNowPlaying: false
    }
  }

  componentDidMount() {
    requestSubscription(
      environment,
      {
        subscription: subscription,
        variables: {input: {soundZone: this.props.data.id}},
      }
    )
  }

  render() {
    let row = <Subheader>{this.props.data.name}</Subheader>
    if (this.state.showNowPlaying) {
      row = (<div>
        <Subheader>{this.props.data.name}</Subheader>
        <SoundZoneDisplay soundZone={this.props.data.id} />
      </div>)
    }

    return <ListItem onClick={() => this.toggleNowPlaying()}>{row}</ListItem>
  }

  toggleNowPlaying() {
    this.setState((prevState) => {
      return {
        showNowPlaying: !prevState.showNowPlaying
      }
    })
  }
}

const subscription =
  graphql`
    subscription SoundZoneDisplaySubscription($input: SoundZoneUpdateInput!) {
      soundZoneUpdate(input: $input) {
        soundZone {
          id name
        }
      }
    }
  `

export default SoundZone
