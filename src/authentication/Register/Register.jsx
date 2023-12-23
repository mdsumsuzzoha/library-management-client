import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const Register = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [termsCondition, setTermsCondition] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValid, setPasswordValid] = useState(true);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const { createUser, userUpdate } = useContext(AuthContext)


  // toggle between show/hide password
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Password validation show in each typing
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // use effect for re rendering to validation of pass.
  useEffect(() => {
    if (password.length < 6) {
      return setPasswordValid('Password must be at least 6 characters long.');
    }
    if (!/[A-Z]/.test(password)) {
      return setPasswordValid('Password must contain at least one capital letter.');
    }
    if (!/[!@#$%^&*]/.test(password)) {
      return setPasswordValid('Password must contain at least one special character.');
    }
    else {
      return setPasswordValid(true);
    }

  }, [password]);

  // to disable the submit btn if password not valid
  useEffect(() => {
    if (typeof passwordValid === 'boolean') {
      setButtonDisabled(false); // Enable the button if the predefined value is a boolean
      return;
    } else {
      setButtonDisabled(true); // Disable the button if the predefined value is not a boolean
      return;
    }
  }, [passwordValid])

  // show Pass Error message in body 
  const displayErrors = < p style={{ color: 'red' }}>
    {passwordValid}
  </p >


  const handleRegistration = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name')
    const photoURL = form.get('photoURL')
    const email = form.get('email')
    const password = form.get('password')

    if (!termsCondition == true) {
      Swal.fire({
        text: "Accept the Terms & Condition. Then try again",
        icon: "error"
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        userUpdate(name,photoURL);
        Swal.fire({
          text: 'Your account create successfully',
          confirmButtonColor: '#3085d6',
          confirmButtonText: 'Go Home',
          allowOutsideClick: false,
          allowEscapeKey: false,
          icon: "success"
        }).then((result) => {
          
          if (result.isConfirmed) {

            window.location.href = '/';
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          text: `${error.code}`,
          icon: "error"
        });

      })

  };



  return (
    <div className="hero min-h-screen bg-base-200">


      {/* <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <label htmlFor="showPassword">
              <input type="checkbox" id="showPassword" />
              Show Password
            </label>
            {displayErrors}
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div> */}
      <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
        <h1 className='text-center text-4xl font-semibold mt-6'>Ragister Form</h1>
        <form
          onSubmit={handleRegistration}
          className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text"
              placeholder="Enter full Name"
              name="name"
              // value={formData.email}
              className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profile Photo {'(optional)'}</span>
            </label>
            <input type="text"
              placeholder="Enter photo URL"
              name="photoURL"
              // value={formData.email}
              className="input input-bordered" />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email"
              placeholder="email"
              name="email"
              // value={formData.email}
              className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type={showPassword ? 'text' : 'password'}
              placeholder="password"
              name="password"
              // value={formData.password}
              onChange={handlePasswordChange}
              className="input input-bordered" required />
            {displayErrors}
            <div className='flex'>
              <input onChange={handleShowPassword} type="checkbox" id="showPassword" />
              <label className="label">
                <p>Show Password</p>
              </label>
            </div>
          </div>
          <div className='flex'>
            <input onClick={() => setTermsCondition(!termsCondition)} type="checkbox" name="terms" id="2" />
            <label className="label">
              <p>Accept the Terms & Condition or <span className="text-sm btn-link link-hover text-blue-800"><Link>See the terms & condition</Link></span></p>
            </label>

          </div>
          <div className="form-control mt-6">
            <button type="submit" disabled={buttonDisabled} className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="text-center space-y-4 mb-6 ">
          <p>Already have an account? <span className="btn-link font-semibold texl-lg"><Link to='/login'>Login</Link></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
