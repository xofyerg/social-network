import {
  UsersAction,
  UsersActionTypes,
  UsersState,
} from "../../types/usersTypes";

const initialState: UsersState = {
  users: [],
  totalUsersCount: 0,
  error: "",
  isLoading: false,
};

const usersReducer = (
  state = initialState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case UsersActionTypes.SET_LOADING:
      return { ...state, isLoading: true };
    case UsersActionTypes.FETCH_USERS:
      return { ...state, users: action.payload, isLoading: false };
    case UsersActionTypes.SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.payload };
    default:
      return state;
  }
};

export default usersReducer;