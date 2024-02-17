// import { CategoriesFilter } from '../../components/CategoriesFilter';
// import { CustomSwiper } from '../../components/CustomSwiper';
// import { HomePageSwiper } from '../../components/HomePageSwiper';
import { ShopCategory } from '../../components/ShopCategory';
import './home-page.scss';

export const HomePage = () => {
  return (
    <section className="home-page">
      {/* <h1 className="h1">Welcome to Nice Gadgets store!</h1> */}

      {/* <HomePageSwiper />

        <CustomSwiper title="Brand new models" items={null} />

        <CategoriesFilter />

        <CustomSwiper title="Hot prices" items={null} /> */}

      <ShopCategory />
    </section>
  );
};
