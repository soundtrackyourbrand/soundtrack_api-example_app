import * as AbsintheSocket from "@absinthe/socket";
import {Socket as PhoenixSocket} from "phoenix";

export default AbsintheSocket.create(
  new PhoenixSocket(
    'wss://api.soundtrackyourbrand.com/v2',
    {
      params: {
        Authorization: 'Basic ' + process.env.REACT_APP_API_CREDENTIALS
      }
    }
  )
);

