export const initialState = {
  chiefComplaints: [],
  diagnosis: [],
  procedure: [],
  investigation: [],
  advice: [],
  emergencyInstructions: [],
  prognosis: [],
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
    case 'SET_ADVICE':
      return {
        ...state,
        advice: action.advice,
      };
    case 'SET_EMERGENCY_INSTRUCTIONS':
      return {
        ...state,
        emergencyInstructions: action.emergencyInstructions,
      };
    case 'SET_PROGNOSIS':
      return {
        ...state,
        prognosis: action.prognosis,
      };
    default:
      return state;
  }
};
export default prescriptionReducer;
