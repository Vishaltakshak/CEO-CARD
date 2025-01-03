export const registrationReducer = (state, action) => {
    switch(action.type) {
        case action.type:
            return { ...state, [action.type]: action.payload }
        default:
            return state
    }
}

export const registrationState = {
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    dob: '',
    linkedinProfile: '',
    companyName: '',
    professionalTitle: '',
    password: ''
}
