import { useRouter } from 'next/router';
import SellerLayout from '../../components/layouts/SellerLayout';
import OrderCheck from '../../components/seller/OrderCheck';
import SellProduct from '../../components/seller/SellPropduct';
import TrackingInfo from '../../components/seller/TrackingInfo';
import ClaimProduct from '../../components/seller/ClaimProduct';
import Questions from '../../components/seller/Questions';
import Reviews from '../../components/seller/Reviews';

const menuText = {
  sale: '판매중인 상품',
  order: '주문',
  tracking: '배송',
  claim: '취소/교환/환불',
  question: '문의',
  review: '리뷰',
  total: '통계'
};

function Dynamic() {
  const router = useRouter();
  const { menu } = router.query;
  return (
    <SellerLayout menu={menu} menuText={menuText} header={<h1>대시보드</h1>}>
      {(() => {
        switch (menu) {
          case 'sale':
            return <SellProduct />;
          case 'order':
            return <OrderCheck />;
          case 'tracking':
            return <TrackingInfo />;
          case 'claim':
            return <ClaimProduct />;
          case 'review':
            return <Reviews />;
          case 'question':
            return <Questions />;
          case 'total':
            return <h1>준비중입니다</h1>;
          default:
            return null;
        }
      })()}
    </SellerLayout>
  );
}

export default Dynamic;
