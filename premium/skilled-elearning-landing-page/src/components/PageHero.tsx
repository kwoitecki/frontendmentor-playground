import CustomButton from './ui/CustomButton';

export const PageHero = () => {
  return (
    <section className='hero'>
      <div className='hero__column'>
        <h1 className='hero__title'>Maximize skill, minimize budget</h1>
        <p className='hero__description'>
          Our modern courses across a range of in-demand skills will give you
          the knowledge you need to live the life you want.
        </p>
        <div
          className='hero__action
        '
        >
          <CustomButton mode='lite' />
        </div>
      </div>
      <picture className='hero__image-wrapper'>
        <source media='(min-width: 1100px)' srcSet='./image-hero-desktop.png' />
        <source media='(min-width: 768px)' srcSet='./image-hero-tablet.png' />
        <img
          className='hero__image'
          src='./image-hero-mobile.png'
          alt='Hero Image'
        />
      </picture>
    </section>
  );
};

export default PageHero;
