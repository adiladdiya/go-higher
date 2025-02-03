import { createAppSlice } from "@/lib/createAppSlice";
import type { PayloadAction } from "@reduxjs/toolkit";
import challenges from "../../../app/data/mock/1.json"

interface challenge {
  id: string;
  [key: string]: any
}

interface profile {
  uid: string;
  name: string;
  email: string;
  [key: string]: string
}

interface userChallenges {
  challenges: { [id: string]: challenge };
  profile: profile;
}

const initialState: userChallenges = {
  challenges: challenges,
  profile: {
    uid: '',
    name: '',
    email: ''
  },
}

export const userDataSlice = createAppSlice({
  name: "userData",
  initialState,
  reducers: (create) => ({

    // addChallenge: create.reducer((state, action: PayloadAction<challenge>) => {
    //   state.challenges.push(action.payload);
    // }),
    // removeChallenge: create.reducer((state, action: PayloadAction<string>) => {
    //   state.challenges = state.challenges.filter((c) => c.id !== action.payload);
    // }),
    // updateChallenge: create.reducer((state, action: PayloadAction<challenge>) => {
    //   const index = state.challenge.findIndex((c) => c.id === action.payload.id);
    //   state.challenge[index] = action.payload;
    // }),
    updateProfile: create.reducer((state, action: PayloadAction<profile>) => {
      state.profile = action.payload;
    })
  }),
  selectors: {
    selectUserProfile: (userData) => userData.profile,
    selectChallenges: (userData) => userData.challenges,
  },
});


export const {
  // addChallenge,
  // removeChallenge,
  // updateChallenge,
  updateProfile } =
  userDataSlice.actions;

export const { selectUserProfile, selectChallenges } = userDataSlice.selectors;


export default userDataSlice.reducer;
