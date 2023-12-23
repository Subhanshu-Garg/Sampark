import { configureStore } from '@reduxjs/toolkit';
import authReducer from './redux/Users/authSlice.js';
import suchiMemberReducer from './redux/SuchiMembers/suchiMemberSlice.js';
import suchiMembersReducer from './redux/SuchiMembers/suchiMembersSlice.js'
import updatesReducer from './redux/Updates/updatesSlice.js'

export default configureStore({
  reducer: {
    auth: authReducer,
    suchiMember: suchiMemberReducer,
    suchiMembers: suchiMembersReducer,
    updates: updatesReducer
  },
});
