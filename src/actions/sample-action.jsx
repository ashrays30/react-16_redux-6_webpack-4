import * as types from './action-types';

export function receiveSample(featureFlagKey) {
  return {type: types.GET_FEATURE_FLAGS, payload: featureFlagKey};
}

export function fetchFeatureFlag(featureFlagKey) {
  return dispatch => {
    dispatch(receiveSample(featureFlagKey))
  };
}