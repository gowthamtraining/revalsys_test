import { useState } from 'react';
import { useForm } from 'react-hook-form';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const useContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const [submitted, setSubmitted] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const onSubmit = (data: ContactFormData) => {
    setSubmitted(true);
    reset();
    showToast('Your message has been sent successfully!');
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    submitted,
    setSubmitted,
    toastMessage
  };
};

export default useContactPage;

