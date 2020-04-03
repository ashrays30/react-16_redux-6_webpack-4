import {combineReducers} from 'redux';
import { featureFlagReducer as featureFlag } from './sample-reducer';

const rootReducer = combineReducers({
  featureFlag
});

export default rootReducer;