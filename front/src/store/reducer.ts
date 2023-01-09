export const initialState = {
  token: null,
  refreshToken: null,
};

export const actionTypes = {
  SET_TOKEN: "SET_TOKEN",
};

// type State = {
//   accessToken: string;
//   refreshToken: string;
// };

type Action = { type: "SET_TOKEN"; accessToken: string };

const reducer = (state = initialState, action: any) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.SET_TOKEN:
      return { ...state, token: action.value };

    default:
      return state;
  }
};

export default reducer;
