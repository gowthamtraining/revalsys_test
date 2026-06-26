import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { selectCartQuantity } from '../../redux/selectors/cartSelectors';
import { selectWishlistItems, selectTheme } from '../../redux/selectors/productSelectors';
import { logoutUser } from '../../redux/slices/authSlice';
import { selectAuth } from '../../redux/selectors/authSelectors';
import { toggleTheme } from '../../redux/slices/themeSlice';
import { ROUTES } from '../../constants/routes';

export const useNavbar = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const cartCount = useAppSelector(selectCartQuantity);
  const wishlistCount = useAppSelector(selectWishlistItems).length;
  const auth = useAppSelector(selectAuth);
  const theme = useAppSelector(selectTheme);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    router.push(ROUTES.HOME);
    setMobileMenuOpen(false);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // Sync theme class on HTML element
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (theme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return {
    cartCount,
    wishlistCount,
    auth,
    theme,
    mobileMenuOpen,
    setMobileMenuOpen,
    handleLogout,
    handleThemeToggle,
    toggleMobileMenu
  };
};

export default useNavbar;
