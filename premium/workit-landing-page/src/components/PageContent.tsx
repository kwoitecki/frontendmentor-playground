import cards from '../data/cards.json';
import Card from './controls/Card';

const PageContent = () => {
  return (
    <main className='bg-pattern-light main-content'>
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
        <h2 className='heading heading--medium'>Be the first to test</h2>
        <p className='content'>
          Hi, I'm Louis Graham, the founder of the company. Book a demo call
          with me to become a beta tester for our app and kickstart your
          company. Apply for access below and I’ll be in touch to schedule a
          call.
        </p>
        <button className='button button--primary'>Apply for access</button>
      </article>
    </main>
  );
};

export default PageContent;
