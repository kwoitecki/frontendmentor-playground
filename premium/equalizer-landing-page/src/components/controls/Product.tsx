const Product = () => {
  return (
    <article className='product'>
      <img
        className='product__image'
        src='./illustration-app.png'
        alt='Illustration of the app'
      />
      <picture>
        <img
          className='product__background'
          src='./bg-pattern-2.svg'
          alt='Product Background'
        />
      </picture>
      <div className='product__content'>
        <h2 className='product__header'>Premium EQ</h2>
        <p className='product__description'>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <p className='product__price'>
          <span className='product__price-acent'>$4</span> / month
        </p>
        <div className='product__actions'>
          <button className='btn btn--dark'>
            <img src='./icon-apple.svg' alt='apple download' />
            iOS Download
          </button>
          <button className='btn'>
            <img src='./icon-android.svg' alt='android download' />
            Android Download
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;
