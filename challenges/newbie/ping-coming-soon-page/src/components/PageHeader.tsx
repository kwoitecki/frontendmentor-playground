import PageForm from './PageForm';

const PageHeader = () => {
  return (
    <header className='header'>
      <div className='header__logo'>
        <img
          src='./logo.svg'
          alt='Logo Ping.'
          className='header__logo__image'
        />
      </div>
      <h1 className='header__title u-fw-bold'>
        <span className='u-fc-gray u-fw-light'>We are launching</span> soon!
      </h1>
      <h2 className='header__subtitle u-fw-light'>
        Subscribe and get notified
      </h2>
      <PageForm />
    </header>
  );
};

export default PageHeader;
