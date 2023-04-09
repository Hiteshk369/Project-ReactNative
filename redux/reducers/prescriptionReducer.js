export const initialState = {
  chiefComplaints: [],
  examinations: '',
  diagnosis: [],
  medication: [],
  procedure: [],
  investigation: [],
  advice: [],
  findings: '',
  emergencyInstructions: [],
  prognosis: [],
  referTo: [],
  referBy: [],
  doctorNotes: '',
};

const prescriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHIEF_COMPLAINTS':
      return {
        ...state,
        chiefComplaints: action.chiefComplaints,
      };
    case 'SET_EXAMINATIONS':
      return {
        ...state,
        examinations: action.examinations,
      };
    case 'SET_DIAGNOSIS':
      return {
        ...state,
        diagnosis: action.diagnosis,
      };
    case 'SET_MEDICATION':
      return {
        ...state,
        medication: action.medication,
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
    case 'SET_FINDINGS':
      return {
        ...state,
        findings: action.findings,
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
    case 'SET_REFER_TO':
      return {
        ...state,
        referTo: action.referTo,
      };
    case 'SET_REFER_BY':
      return {
        ...state,
        referBy: action.referBy,
      };
    case 'SET_DOCTOR_NOTES':
      return {
        ...state,
        doctorNotes: action.doctorNotes,
      };
    default:
      return state;
  }
};
export default prescriptionReducer;
