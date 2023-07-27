import style from '@/app/styles/About_left.module.css';
const About_left = () => {
  return (
    <div className="col-sm-12, col-md-6, col-lg-6">
      <div className="row gx-1">
        <div className="col-sm-12, col-md-6, col-lg-6">
          <img
            src="/images/jpg.bg"
            className="img-fluid shadow bg-dark bg-gradient rounded"
            alt="profile"
            width={200}
          />
        </div>
        <div className="col-sm-12, col-md-6, col-lg-6 text-left mt-3">
          <p>
            <b>Name</b>: bittu patel
          </p>
          <hr />
          <p className={style.line_height}>
            <b>Profile</b>: Frontend Developer
          </p>
          <hr />
          <p className={style.line_height}>
            <b>Email</b>: bittupatel99095@gmail.com
          </p>
          <hr />
          <p className={style.line_height}>
            <b>Phone</b>: (+91) 9192939495
          </p>
        </div>
      </div>
      <label htmlFor="Success example" className="mt-5">HTML</label>
      <div
        className="progress mb-4 mt-2"
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-success" style={{width : '95%'}}>
          95%
        </div>
      </div>
      <label htmlFor="Success example">CSS</label>
      <div
        className="progress  mb-4 mt-2"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-info text-dark" style={{width : '90%'}}>
          90%
        </div>
      </div>
      <label htmlFor="Success example" >JAVASCRIPT</label>
      <div
        className="progress  mb-4 mt-2"
        role="progressbar"
        aria-label="Warning example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        
        <div className="progress-bar bg-warning text-dark" style={{width : "90%"}}>
          90%
        </div>
      </div>
      <label htmlFor="Success example" >REACT.JS</label>
      <div
        className="progress  mb-4 mt-2"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-danger" style={{width : '72%'}}>
          72%
        </div>
      </div>
      <label htmlFor="Success example" >PHP</label>
      <div
        className="progress  mb-4 mt-2"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-info-subtle" style={{width : '85%'}}>
          85%
        </div>
      </div>
      <label htmlFor="Success example" >PYTHON</label>
      <div
        className="progress  mb-4 mt-2"
        role="progressbar"
        aria-label="Danger example"
        aria-valuenow="100"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar bg-dark" style={{width : '87%'}}>
          87%
        </div>
      </div>
    </div>
  )
}

export default About_left