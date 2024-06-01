const Product = () => {
  return (
    <article className='product'>
      <img src='./illustration-app.png' alt='Illustration of the app' />
      <div>
        <h2>Premium EQ</h2>
        <p>
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <p>
          <span>$4</span> / month
        </p>
        <div>
          <button>iOS Download</button>
          <button>Android Download</button>
        </div>
      </div>
    </article>
  );
};

export default Product;
