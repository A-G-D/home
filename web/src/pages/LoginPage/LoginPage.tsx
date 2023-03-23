import { navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import { useAuth } from 'src/auth'
import LoginForm from 'src/components/forms/LoginForm'

const LoginPage = () => {
  const { isAuthenticated, logIn, loading } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title='Login' />

      <div className='flex-auto flex-center'>
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <LoginForm
          onSubmit={onSubmit}
          usernameRef={usernameRef}
          loading={loading}
        />
      </div>
    </>
  )
}

export default LoginPage
