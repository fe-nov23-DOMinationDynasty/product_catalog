export const HomePageSwiper = () => {
  return (
    <section className="swiper">
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="swiper__arrow-left" />
      <div className="swiper__main-content" />
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button type="button" className="swiper__arrow-right" />
    </section>
  );
};
