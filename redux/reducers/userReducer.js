export const initialState = {
  userRegistered: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_REGISTER_USER':
      return {
        ...state,
        userRegistered: action.userRegistered,
      };
    default:
      return state;
  }
};

export default userReducer;
