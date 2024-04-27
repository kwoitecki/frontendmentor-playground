const Header = () => {
  return (
    <>
      <div className='rating__icon'>
        <img
          src='./icon-star.svg'
          alt='rating star'
          className='rating__image'
        />
      </div>
      <h1 className='rating__title'>How did we do?</h1>
    </>
  );
};

export default Header;
