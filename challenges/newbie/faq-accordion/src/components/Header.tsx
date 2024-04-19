const Header = () => {
  return (
    <header className='flex items-center gap-6'>
      <img
        src='/icon-star.svg'
        alt='FAQ Icon'
        className='inline-block w-[24px] h-[24px]'
      />
      <h1 className='font-c-bold text-c-h1 text-c-dark-purple'>FAQs</h1>
    </header>
  );
};

export default Header;
