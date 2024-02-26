import './NotFoundPage.scss';
import '../../styles/utils/text-styles.scss';
import { BackButton } from '../../components/BackButton';

export const NotFoundPage = () => (
  <section className="not-found">
    <div className="not-found__back">
      <BackButton />
    </div>

    <div className="not-found__banner">
      <p className="not-found__404">
        404
      </p>

      <i className="not-found__error" />

      <div className="not-found__text">Not Found</div>

      <div className="not-found__page-not-found">
        The page you are looking for cannot be found
      </div>
    </div>

    <div className="not-found__images">
      <img
        className="not-found__img"
        src="./img/phones-not-found.webp"
        alt="phones-not-found"
      />
    </div>
  </section>
);
