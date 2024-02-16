export const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item__info">
        <button
          type="button"
          className="cart-item__delete"
        >
          <img src=".icons/close.svg" alt="close-icon" />
        </button>

        <img
          src="./img/phones/apple-iphone-14-pro/spaceblack/00.webp"
          alt="iphone-model"
          className="cart-item__image"
        />

        <p className="cart-item__about">
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>

      <div className="cart-item__cost">
        <div className="cart-item__count">
          <button
            type="button"
            className="button__remove"
          >
            -
          </button>

          <p className="count">
            1
          </p>

          <button
            type="button"
            className="button__add"
          >
            +
          </button>
        </div>

        <p className="cart-item__price">
          $999
        </p>
      </div>
    </div>
  );
};
