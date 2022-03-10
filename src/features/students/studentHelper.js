import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    Name: "Bo"

}

export const studentHelper = createSlice ({

    name : "student",
    initialState, 
    reducers: {
        updateStudentName(state, action){
        state.value = action.payload;
    }
}
})

export const selectStudentName = (state) => state.student.value;
export const {updateStudentName} = studentHelper.actions;
export default studentHelper.reducer 