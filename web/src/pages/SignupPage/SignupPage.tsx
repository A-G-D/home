import { navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import SignupForm from 'src/forms/SignupForm'

const SignupPage = () => {
  const { isAuthenticated, signUp, loading } = useAuth()

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

      <div className='flex-auto flex-center'>
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <SignupForm
          onSubmit={onSubmit}
          usernameRef={usernameRef}
          loading={loading}
        />
      </div>
    </>
  )
}

export default SignupPage
