# Soundtrack API | Example app
This is a sample app demonstrating how to implement against the Soundtrack API. The purpose of this app is to get you started, so for the sake of simplicity this is a frontend app.

Please note that you should not build an app where the secrets can be found in the source code. If we find secrets that are exposed, we will block these immediately. We suggest handling the code in a backend and then implement whatever authentication layer that your app needs.

## Prerequisites
* A Soundtrack subscription. Please see www.soundtrackyourbrand.com to sign up
* API credentials. Request them via [this page](https://api.soundtrackyourbrand.com/v2/docs)
* [nodejs](https://nodejs.org/en/download/) (**Note: node version >=10**) and [yarn](https://yarnpkg.com/lang/en/docs/install/)

## Terms of use
By using the Soundtrack API, you accept to our [Terms of use](https://www.soundtrackyourbrand.com/legal/api-terms-of-use).

## Documentation
* [API Documentation](https://api.soundtrackyourbrand.com/v2/docs)
* [API Explorer](https://api.soundtrackyourbrand.com/v2/explore)

## The app
The app displays your brands and their sound zones. You can see what is playing on each zone. Both the sound zone data and the now playing data will be updated over web sockets. You can also find paginated queries and how to setup subscriptions.

## Running the app
```
yarn
yarn run get-schema
yarn run relay # or to start a watcher: yarn run relay --watch
REACT_APP_API_CREDENTIALS=your_token yarn start
```
