import { useRouter } from 'next/router';
import SellerLayout from '../../components/layouts/SellerLayout';
import OrderCheck from '../../components/seller/OrderCheck';
import SellProduct from '../../components/seller/SellPropduct';
import TrackingInfo from '../../components/seller/TrackingInfo';
import ClaimProduct from '../../components/seller/ClaimProduct';
import Questions from '../../components/seller/Questions';
import Reviews from '../../components/seller/Reviews';

function Dynamic() {
  const router = useRouter();
  const { menu } = router.query;
  switch (menu) {
    case 'sale':
      return (
        <SellerLayout menu={menu}>
          <SellProduct />
        </SellerLayout>
      );
    case 'order':
      return (
        <SellerLayout menu={menu}>
          <OrderCheck />
        </SellerLayout>
      );
    case 'tracking':
      return (
        <SellerLayout menu={menu}>
          <TrackingInfo />
        </SellerLayout>
      );
    case 'claim':
      return (
        <SellerLayout menu={menu}>
          <ClaimProduct />
        </SellerLayout>
      );
    case 'review':
      return (
        <SellerLayout menu={menu}>
          <Reviews />
        </SellerLayout>
      );
    case 'question':
      return (
        <SellerLayout menu={menu}>
          <Questions />
        </SellerLayout>
      );
    case 'total':
      return (
        <SellerLayout menu={menu}>
          <h1>준비중입니다</h1>
        </SellerLayout>
      );
    default:
      return null;
  }
}

export default Dynamic;
