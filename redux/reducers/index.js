import patientReducer from './patientReducer';
import prescriptionReducer from './prescriptionReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  patientReducer,
  prescriptionReducer,
});

export default rootReducer;
