export const registrationReducer = (state, action) => {
    switch(action.type) {
        case action.type:
            return { ...state, [action.type]: action.payload }
        default:
            return state
    }
}

export const registrationState = {
    Name: '',
    
    MobileNumber: '',
    Mail: '',
    DOB: '',
    LinkedinProfile: '',
    CompanyName: '',
    ProfessionalTitle: '',
    Password: '',
    ConfirmPassword:'',
    Status:'Inactive',
    Currency:'',
    Language:''
}
