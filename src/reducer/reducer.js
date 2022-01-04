import { SAVE_USERNAME } from "./action";

const initialState = {
  username: "",
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USERNAME: {
      return { ...state, username: action.username };
    }
  }
};

export default reducer;
