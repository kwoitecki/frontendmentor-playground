const CssClassDocumentation = () => {
  return (
    <>
      <h2>Font weights</h2>
      <h3 className='u-fw-light'>u-fw-light</h3>
      <h3 className='u-fw-regular'>u-fw-regular</h3>
      <h3 className='u-fw-bold'>u-fw-bold</h3>

      <br />
      <br />
      <h2>Colors</h2>
      <br />
      <h3>Font-color</h3>
      <p className='u-fc-desaturated-red'>u-fc-desaturated-red</p>
      <p className='u-fc-soft-red'>soft-red</p>
      <p className='u-fc-dark-grayish-red'>dark-grayish-red</p>

      <br />
      <br />
      <h3>Background</h3>
      <div className='u-bgc-desaturated-red'>u-bgc-desaturated-red</div>
      <div className='u-bgc-soft-red'>u-bgc-soft-red</div>
      <div className='u-bgc-dark-grayish-red'>u-bgc-dark-grayish-red</div>
    </>
  );
};

export default CssClassDocumentation;
