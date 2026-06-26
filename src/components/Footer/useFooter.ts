import { useState } from 'react';
import { useForm } from 'react-hook-form';

export interface NewsletterFormData {
  email: string;
}

export const useFooter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>({
    defaultValues: {
      email: ''
    }
  });

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (data: NewsletterFormData) => {
    setSubmitted(true);
    reset();
  };

  const successMessage = 'Thank you for subscribing to our newsletter!';

  return {
    register,
    errors,
    handleSubscribe: handleSubmit(onSubmit),
    submitted,
    successMessage
  };
};

export default useFooter;

