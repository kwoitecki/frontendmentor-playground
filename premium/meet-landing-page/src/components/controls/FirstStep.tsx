const StepOne = () => {
  return (
    <section className='step'>
      <img className='img-setup' src='step1.png' alt='first step' />

      <div className='step1__images'>
        <img className='img-setup' src='image-woman-in-videocall.jpg' />
        <img className='img-setup' src='image-women-videochatting.jpg' />
        <img className='img-setup' src='image-men-in-meeting.jpg' />
        <img className='img-setup' src='image-man-texting.jpg' />
      </div>

      <span>Built for modern use</span>
      <h3>Smarter meetings, all in one place</h3>
      <p>
        Send messages, share files, show your screen, and record your meetings —
        all in one workspace. Control who can join with invite-only team access,
        data encryption, and data export.
      </p>
    </section>
  );
};

export default StepOne;
