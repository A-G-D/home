import { MetaTags } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

export default () => (
  <MainLayout>
    <MetaTags title='404 Page Not Found' />

    <section className='flex justify-center items-center h-screen select-none'>
      <h1 className='rounded-lg px-4 py-2 font-semibold text-5xl text-red-800 bg-gray-200/50'>
        <span>404 Page Not Found</span>
      </h1>
    </section>
  </MainLayout>
)
