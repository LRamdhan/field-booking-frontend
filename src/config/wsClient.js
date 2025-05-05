import { io } from 'socket.io-client';
import { BACKEND_WS } from './env';

const socket = io(BACKEND_WS, {
  auth: {
    email: ''
  },
  reconnection: true,
  autoConnect: false
});

export default socket