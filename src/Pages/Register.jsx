import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
         <div className='flex justify-center items-center min-h-screen '>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label font-semibold">Name</label>
          <input type="text" name='name' className="input" placeholder="Enter your name" />
          <label className="label font-semibold">Photo URL</label>
          <input type="url" name='url' className="input" placeholder="img url" />
          <label className="label font-semibold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label font-semibold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <button className="btn btn-neutral mt-4">Register</button>
          <p className='text-center my-3 font-semibold'>Already Have An Account ?<Link className='text-red-500' to='/auth/login'>Login</Link></p>

        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Register;