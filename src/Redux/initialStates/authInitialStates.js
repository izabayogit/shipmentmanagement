export const authInitialStates = {
  token: localStorage.authToken  || '',
    user_signup: {
        loading: false,
        success: false,
        data: null,
        error: null,
      },
      
      currentUser: {
        loading: false,
        success: false,
        data: null,
        error: null,
      }
}
