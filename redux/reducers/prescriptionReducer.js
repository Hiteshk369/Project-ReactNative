export const initialState = {
  chiefComplaints: [],
  diagnosis: [],
  procedure: [],
  investigation: [],
};

const prescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHIEF_COMPLAINTS':
      return {
        ...state,
        chiefComplaints: action.chiefComplaints,
      };
    case 'SET_DIAGNOSIS':
      return {
        ...state,
        diagnosis: action.diagnosis,
      };
    case 'SET_PROCEDURE':
      return {
        ...state,
        procedure: action.procedure,
      };
    case 'SET_INVESTIGATION':
      return {
        ...state,
        investigation: action.investigation,
      };
    default:
      return state;
  }
};
export default prescriptionReducer;
