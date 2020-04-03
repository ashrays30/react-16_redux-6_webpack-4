import initialState from './initial-state';
import {GET_FEATURE_FLAGS} from '../actions/action-types';

export function featureFlagReducer(state = initialState, action) {
  switch (action.type) {
    case GET_FEATURE_FLAGS:
      return state.featureFlag[action.payload];
    default:
      return state;
  }
}