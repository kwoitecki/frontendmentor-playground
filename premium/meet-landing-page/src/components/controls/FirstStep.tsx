const StepOne = () => {
  return (
    <section className='step'>
      <img className='img-setup' src='step1.png' alt='first step' />

      <article className='step1__images'>
        <img
          className='img-setup'
          src='image-woman-in-videocall.jpg'
          alt='use videocalls'
        />
        <img
          className='img-setup'
          src='image-women-videochatting.jpg'
          alt='use videchatting'
        />
        <img
          className='img-setup'
          src='image-men-in-meeting.jpg'
          alt='use online meetings'
        />
        <img
          className='img-setup'
          src='image-man-texting.jpg'
          alt='use texting'
        />
      </article>

      <article className='step1-description'>
        <span className='step1-description__teaser u-fc-secondary1-400'>
          Built for modern use
        </span>
        <h2 className='step1-description__heading'>
          Smarter meetings, all in one place
        </h2>
        <p className='step1-description__text u-fc-primary-600'>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </article>
    </section>
  );
};

export default StepOne;
