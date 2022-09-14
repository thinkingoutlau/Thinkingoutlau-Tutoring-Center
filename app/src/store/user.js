import axios from "axios";

const initialState = [];

const CREATE_USER = "CREATE_USER";

//action creator
export const _createUser = (newUser) => ({
  type: CREATE_USER,
  newUser,
});

//thunk
export const createNewUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { data: createdUser } = await axios.post("/api/signup", newUser);
      dispatch(_createUser(createdUser));
    } catch (error) {
      console.log(error);
    }
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.newUser];
    default:
      return state;
  }
};

export default userReducer;
