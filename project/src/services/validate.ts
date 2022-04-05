import {toast} from 'react-toastify';
import {errorMessages, RegExpTemplates} from '../consts';
import {isContainSymbol, isMore} from '../utils';

export const validateEmail= (email: string): boolean => {
  if (!email) {
    toast.error(errorMessages.EMAIL_EMPTY);
    return false;
  }

  if (!isContainSymbol(email, RegExpTemplates.EMAIL)) {
    toast.error(errorMessages.EMAIL_FORMAT);
    return false;
  }

  return true;
};

export const validatePassword= (password: string): boolean => {
  if (!isMore(password.length, 2)) {
    toast.error(errorMessages.PASSWORD_LENGTH);
    return false;
  }

  if (isContainSymbol(password,RegExpTemplates.PASSWORD)) {
    toast.error(errorMessages.PASSWORD_CHAR);
    return false;
  }

  return true;
};
