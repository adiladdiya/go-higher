import { createAppSlice } from "@/lib/createAppSlice";
import { nanoid } from 'nanoid'

interface challenge {
  id: string;
 [key: string]: string  
}

 

const initialState: challenge = {
  id: nanoid(),
}

export const challengeSlice = createAppSlice({
  name: "userData",
  initialState,
  reducers: (create) => ({
 
  }),
  selectors: { 
 
  },
});


export const {  } =   challengeSlice.actions;

export const {  } = challengeSlice.selectors;


export default challengeSlice.reducer;
