import cards from '../data/cards.json';
import Card from './controls/Card';

const PageContent = () => {
  return (
    <main className='main-content'>
      <article className='cards'>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </article>
      <article className='apply'>
        <img
          src='apply-image-mobile.png'
          className='apply__image img-clear'
          alt='Apply for access'
        />
        <div className='u-bg-primary-100 u-fc-primary-1000 apply__content'>
          <h2 className='heading heading--medium'>Be the first to test</h2>
          <p className='content apply__content-description'>
            Hi, I'm Louis Graham, the founder of the company. Book a demo call
            with me to become a beta tester for our app and kickstart your
            company. Apply for access below and I’ll be in touch to schedule a
            call.
          </p>
          <button className='button button--primary apply__content-action'>
            Apply for access
          </button>
        </div>
      </article>
    </main>
  );
};

export default PageContent;
