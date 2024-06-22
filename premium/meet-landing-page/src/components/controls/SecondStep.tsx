const SecondStep = () => {
  return (
    <section className='step step2'>
      <img className='img-setup' src='step2.png' alt='second step' />
      <article className='step2-content u-bg-secondary1-400 u-fc-primary-900'>
        <h2 className='step2-content__title'>Experience more together</h2>
        <p className='step2-content__text'>
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <div className='step2-content__actions'>
          <button className='btn btn--large u-bg-secondary2-500 u-fc-primary-900'>
            Download <span className='u-fc-secondary2-800'>v1.3</span>
          </button>
        </div>
      </article>
    </section>
  );
};

export default SecondStep;
