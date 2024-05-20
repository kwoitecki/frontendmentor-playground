import CustomButton from './CustomButton';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__content'>
        <h1>Maximize skill, minimize budget</h1>
        <p className='hero__content__description'>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <div className='hero__content__action'>
          <CustomButton style='lite' />
        </div>
      </div>

      <div className='hero__picture'>
        <picture>
          {/* <source media="(min-width: var(--large-screen))" srcSet={largeImage} />
      <source media="(min-width: var(--medium-screen))" srcSet={mediumImage} />
      <source media="(max-width: calc(var(--medium-screen) - 1px))" srcSet={smallImage} /> */}

          <source media='(min-width: 650px)' srcSet='./image-hero-tablet.png' />
          <img
            className='hero__picture__img'
            src='./image-hero-mobile.png'
            alt='Hero Image'
          />
        </picture>
      </div>
    </div>
  );
};

export default Hero;
