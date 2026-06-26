import { REGEX } from '../constants/regex';

export interface ValidationErrors {
  [key: string]: string;
}

export const Validation = {
  validateContactForm: (name: string, email: string, message: string): ValidationErrors => {
    const errors: ValidationErrors = {};

    if (!name.trim()) {
      errors.name = 'Name is required.';
    }

    if (!email.trim()) {
      errors.email = 'Email is required.';
    } else if (!REGEX.email.test(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!message.trim()) {
      errors.message = 'Message is required.';
    } else if (message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long.';
    }

    return errors;
  },

  validateLoginForm: (username: string): ValidationErrors => {
    const errors: ValidationErrors = {};
    if (!username.trim()) {
      errors.username = 'Username is required.';
    } else if (username.trim().length < 3) {
      errors.username = 'Username must be at least 3 characters.';
    }
    return errors;
  }
};
