// @flow

'use strict';

import type {Action} from '../action/types';

export type State = {
  isLoggedIn: boolean;
};


const initialState = {
  isLoggedIn: false,
};

function user(state: State = initialState, action: Action): State {
  return state;
}

export default user;
