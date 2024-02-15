import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function signUp() {
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
          <form className='flex flex-col gap-4'>
            <div className="">
              <Label value='Your User'/>
              <TextInput type='text' placeholder='Your User' id='username' />
            </div>
            <div className="">
              <Label value='Your email'/>
              <TextInput type='text' placeholder='Email' id='email' />
            </div>
            <div className="">
              <Label value='Your password'/>
              <TextInput type='text' placeholder='Password' id='password' />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to='/signin' className='text-blue-500'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}