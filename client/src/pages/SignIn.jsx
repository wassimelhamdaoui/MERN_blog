import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import { set } from 'mongoose';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignIn() {
  const [formData, setFormData] = useState({})
  const [errorMessages, setErrorMessages] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.email || !formData.password){
      return setErrorMessages({error: 'please fill all the fields'});
    }
    try{
      setLoading(true);
      setErrorMessages(null);
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success === false){
        return setErrorMessages(data.message)
      }
      setLoading(false);
      if(res.ok){
        navigate('/');
      }
    }catch(err){
      setErrorMessages(err.message);
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left side */}
        <div className="flex-1">
          <Link to='/' className='font-bold dark:text-white text-4xl'>
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500
              to-pink-500 rounded-lg text-white'> wassim's</span>
              Blog
          </Link>
          <p className='text-sm mt-5'>
            this is a blog where you can share your thoughts and ideas with the world
          </p>
        </div>
        {/* right side */}

        <div className="flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className="">
              <Label value='Your email'/>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
            </div>
            <div className="">
              <Label value='Your password'/>
              <TextInput type='password' placeholder='********' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
              {
                loading ? (
                  <>
                    <Spinner size='sm'/>
                    <span className='pl-2'>Loading...</span>
                  </>
                ) : 'Sign In'
              }
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Dont Have an account?</span>
            <Link to='/signup' className='text-blue-500'>
              Sign Up
            </Link>
          </div>
          {
            errorMessages && (
              <Alert className='mt-5' color='failure'>
                {errorMessages.error}
              </Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}