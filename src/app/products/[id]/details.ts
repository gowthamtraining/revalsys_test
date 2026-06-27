import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { selectProductById, selectIsInWishlist, selectAllProducts } from '../../../redux/selectors/productSelectors';
import { toggleWishlist } from '../../../redux/slices/wishlistSlice';
import { addItem } from '../../../redux/slices/cartSlice';
import { ProductService } from '../../../services/product.service';
import { ROUTES } from '../../../constants/routes';

export const useProductDetails = (id: string) => {
  const dispatch = useAppDispatch();

  const product = useAppSelector(selectProductById(id));
  const isWishlisted = useAppSelector(selectIsInWishlist(id));
  const allProducts = useAppSelector(selectAllProducts);

  const { watch, setValue } = useForm({
    defaultValues: {
      quantity: 1,
      selectedImage: '',
      toastMessage: null as string | null,
      isCopied: false,
      galleryImages: [] as string[]
    }
  });

  const quantity = watch('quantity');
  const selectedImage = watch('selectedImage');
  const toastMessage = watch('toastMessage');
  const isCopied = watch('isCopied');
  const galleryImages = watch('galleryImages');

  const setQuantity = (val: number) => setValue('quantity', val);
  const setSelectedImage = (val: string) => setValue('selectedImage', val);

  useEffect(() => {
    if (product) {
      setValue('selectedImage', product.image);
      setValue('galleryImages', [
        product.image,
        `${product.image}&blur=2`,
        `${product.image}&sat=-50`,
        `${product.image}&hue=180`
      ]);
      setValue('quantity', 1);
    }
  }, [product, setValue]);

  const handleToggleWishlist = () => {
    if (!product) return;
    dispatch(toggleWishlist(product.id));
    showToast(isWishlisted ? 'Removed from Wishlist' : 'Added to Wishlist!');
  };

  const handleAddToCart = () => {
    if (!product) return;
    dispatch(addItem({ product, quantity }));
    showToast(`Added ${quantity} item(s) to cart successfully!`);
  };

  const handleCopyLink = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard.writeText(window.location.href);
    setValue('isCopied', true);
    showToast('Product link copied to clipboard!');
    setTimeout(() => setValue('isCopied', false), 2000);
  };

  const showToast = (message: string) => {
    setValue('toastMessage', message);
    setTimeout(() => {
      setValue('toastMessage', null);
    }, 3000);
  };

  const relatedProducts = product
    ? ProductService.getRelatedProducts(allProducts, product, 4)
    : [];

  const breadcrumbItems = product
    ? [
        { label: 'Products', href: ROUTES.PRODUCTS },
        { label: product.name }
      ]
    : [];

  const isOutOfStock = product ? product.stock === 0 : true;

  return {
    product,
    isWishlisted,
    quantity,
    setQuantity,
    selectedImage,
    setSelectedImage,
    galleryImages,
    handleToggleWishlist,
    handleAddToCart,
    handleCopyLink,
    isCopied,
    relatedProducts,
    toastMessage,
    breadcrumbItems,
    isOutOfStock
  };
};
export default useProductDetails;
