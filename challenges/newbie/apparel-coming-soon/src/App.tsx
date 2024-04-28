import './App.scss';
import EmailForm from './components/EmailForm';
import PageHeader from './components/PageHeader';
// import CssClassDocumentation from './docs/CssClassDocumentation';

function App() {
  return (
    <>
      {/* <CssClassDocumentation /> */}
      <div className='content'>
        <PageHeader />
        <div className='content__image'></div>
        <div className='content__text'>
          <h1 className='content__text__title u-fw-bold fc-dark-grayish-red'>
            <span className='content__text__teaser u-fc-desaturated-red u-fw-light'>
              We're
            </span>
            Coming soon
          </h1>

          <p className='content__text__description u-fc-desaturated-red'>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>

          <EmailForm />
        </div>
      </div>
    </>
  );
}

export default App;
