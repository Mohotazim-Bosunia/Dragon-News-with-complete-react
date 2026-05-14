import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-screen '>
              <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label font-semibold">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label font-semibold">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-center my-3 font-semibold'>Dont’t Have An Account ?<Link className='text-red-500' to='/auth/register'>Register</Link></p>
        </fieldset>
      </div>
    </div>
        </div>
    );
};

export default Login;