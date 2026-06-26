import { useState, useEffect } from 'react';
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

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState('');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const [galleryImages, setGalleryImages] = useState<string[]>([]);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
      setGalleryImages([
        product.image,
        `${product.image}&blur=2`,
        `${product.image}&sat=-50`,
        `${product.image}&hue=180`
      ]);
      setQuantity(1);
    }
  }, [product]);

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
    setIsCopied(true);
    showToast('Product link copied to clipboard!');
    setTimeout(() => setIsCopied(false), 2000);
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
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
