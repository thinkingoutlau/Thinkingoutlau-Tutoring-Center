import axios from "axios";

const initialState = [];

const CREATE_USER = "CREATE_USER";
const EXISTING_USER = "EXISTING_USER";

//action creator
export const _createUser = (newUser) => ({
  type: CREATE_USER,
  newUser,
});

export const _existingUser = (user) => ({
  type: EXISTING_USER,
  user,
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

export const existingUser = (user) => {
  return async (dispatch) => {
    try {
      const { data: userInDB } = await axios.post("/api/login", user);
      dispatch(_existingUser(userInDB));
    } catch (error) {
      console.log(error);
    }
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [action.newUser];
    case EXISTING_USER:
      return [...state, action.user];
    default:
      return state;
  }
};

export default userReducer;
