import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  user: JSON.parse(localStorage.getItem("userForm")) || {
    id: uuidv4(),
    name: "",
    email: "",
    phone: "",
    address: "",
  },
  unsavedChanges: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
      state.unsavedChanges = true;
    },
    saveUser: (state) => {
      localStorage.setItem("userForm", JSON.stringify(state.user));
      state.unsavedChanges = false;
    },
    resetUser: (state) => {
      state.user = {
        id: uuidv4(),
        name: "",
        email: "",
        phone: "",
        address: "",
      };
      state.unsavedChanges = false;
      localStorage.removeItem("userForm");
    },
    setUnsavedChanges: (state, action) => {
      state.unsavedChanges = action.payload;
    },
  },
});

export const { updateUser, saveUser, resetUser, setUnsavedChanges } =
  userSlice.actions;
export default userSlice.reducer;
