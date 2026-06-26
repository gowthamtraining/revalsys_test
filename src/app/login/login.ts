import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../redux/hooks';
import { setAuth } from '../../redux/slices/authSlice';
import { useRouter } from 'next/navigation';
import { ROUTES } from '../../constants/routes';

export interface LoginFormData {
  username: string;
}

export const useLoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      username: ''
    }
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const onSubmit = (data: LoginFormData) => {
    const user = data.username.trim();
    dispatch(
      setAuth({
        isLoggedIn: true,
        isGuest: false,
        username: user
      })
    );
    showToast(`Welcome back, ${user}!`);
    setTimeout(() => {
      router.push(ROUTES.PRODUCTS);
    }, 1500);
  };

  const handleGuestLogin = () => {
    dispatch(
      setAuth({
        isLoggedIn: true,
        isGuest: true,
        username: 'Guest'
      })
    );
    showToast('Logged in as Guest!');
    setTimeout(() => {
      router.push(ROUTES.PRODUCTS);
    }, 1500);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return {
    register,
    errors,
    handleUserLogin: handleSubmit(onSubmit),
    handleGuestLogin,
    toastMessage
  };
};

export default useLoginPage;
