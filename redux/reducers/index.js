import userReducer from './userReducer';
import patientReducer from './patientReducer';
import prescriptionReducer from './prescriptionReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  userReducer,
  patientReducer,
  prescriptionReducer,
});

export default rootReducer;
