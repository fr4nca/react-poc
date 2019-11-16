export const signInRequest = (email: string, password: string) => {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
};

export const signInSuccess = (token: string, user: {}) => {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
};

export const signFailure = () => {
  return {
    type: '@auth/SIGN_FAILURE',
  };
};

export const signOut = () => {
  return {
    type: '@auth/SIGN_OUT',
  };
};
