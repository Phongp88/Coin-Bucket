import { EMAIL_REGX, PASSWORD_REGX, NAME_REGX } from "../constants";

export const isEmailValid = email => EMAIL_REGX.test(email);

export const isPasswordValid = password => PASSWORD_REGX.test(password);

export const isNameValid = name => NAME_REGX.test(name);
