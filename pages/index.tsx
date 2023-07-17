import { useState } from 'react';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className='container'>
      <div className='w-25 h-auto mx-auto mt-8'>
      <form>
        <div className="form-outline mb-1">
          <input type="email" id="form2Example1 " className="form-control bg-gray-100" />
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>

        <div className="form-outline mb-2">
          <input type="password" id="form2Example2" className="form-control bg-gray-100" />
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>

        <div className="row mb-2">
          <div className="col d-flex justify-content-center">
            <div className="form-check">
              <input className="form-check-input " type="checkbox" value="" id="form2Example31" checked />
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
          </div>

          <div className="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button type="button" className="btn btn-primary btn-block mb-3">Sign in</button>

        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>


    
      </div>
    </div>
  );
}
