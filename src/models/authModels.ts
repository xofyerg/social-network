// ---------- Formik ---------- //
export interface IAuthFormValues {
  email: string;
  password: string;
  captcha: string;
  // rememberMe: boolean;
}

export interface IAuthFormValidation {
  email: string;
  password: string;
}

export interface IAuthFormSubmit {
  setStatus: (message: {}) => void | string;
  setSubmitting: (submit: boolean) => void;
}

// ---------- Auth Data ---------- //
export interface IAuthMe {
  id: number;
  email: string;
  login: string;
}

export interface IAuthMeData {
  resultCode: number;
  messages: string[];
  data: IAuthMe;
}

export interface IAuthLoginData {
  resultCode: number;
  messages: string[];
  data: {
    userId: number;
  };
}

export interface IAuthLogoutData {
  data: {};
  fieldsErrors: string[];
  messages: string[];
  resultCode: number;
}

export enum AuthActionTypes {
  SET_AUTH_ME = "auth/SET_AUTH_ME",
  FETCH_CAPTCHA_SUCCESS = "auth/FETCH_CAPTCHA_SUCCESS",
}

interface setAuthMe {
  type: AuthActionTypes.SET_AUTH_ME;
  payload: {
    userId: number | null;
    email: string | null;
    login: string | null;
    isAuth: boolean;
  };
}

interface fetchCaptchaSuccess {
  type: AuthActionTypes.FETCH_CAPTCHA_SUCCESS;
  payload: string;
}

export type AuthAction = setAuthMe | fetchCaptchaSuccess;
