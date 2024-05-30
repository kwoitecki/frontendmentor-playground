import Courses from './Courses';
import PageHero from './PageHero';

const PageContent = () => {
  const testStyle = {
    background: 'black',
    color: 'white',
  };

  return (
    <main>
      <PageHero />
      <Courses />
    </main>
  );
};

export default PageContent;
