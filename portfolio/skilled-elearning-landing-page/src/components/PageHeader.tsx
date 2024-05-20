import Hero from './Hero';
import Navigation from './Navigation';

const PageHeader = () => (
  <header className='container'>
    <Navigation mode='light' />
    <Hero />
  </header>
);

export default PageHeader;
