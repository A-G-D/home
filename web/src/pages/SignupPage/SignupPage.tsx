import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import SignupForm from 'src/forms/SignupForm'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await signUp({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title='Signup' />

      <div className='rw-main flex-center'>
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <SignupForm onSubmit={onSubmit} usernameRef={usernameRef} />
      </div>
    </>
  )
}

export default SignupPage
