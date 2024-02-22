import './home-page.scss';
import '../../styles/utils/text-styles.scss';
import { PromoSlider } from '../../components/PromoSilder';
import { useResize } from '../../hooks/useResize';
import { ShopCategory } from '../../components/ShopCategory';
import { promosMobile, promosTabletAndDesktop } from '../../utils/promosHelper';
import { tabletWidth } from '../../constants/constants';



export const HomePage = () => {
  const [windowWidth] = useResize();

  return (
    <section className="home-page">

      <h1 className="h1 home-page__title">
        Welcome to Nice Gadgets store!
      </h1>

      <PromoSlider
        promos={
          windowWidth >= tabletWidth ? promosTabletAndDesktop : promosMobile
        }
      />

      <ShopCategory />
    </section>
  );
};
