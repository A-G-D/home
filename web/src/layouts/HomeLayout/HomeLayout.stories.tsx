import HomeLayout from './HomeLayout'

export const Default = () => {
  return (
    <HomeLayout>
      <div className='h-64' />
    </HomeLayout>
  )
}

export const Empty = () => {
  return <HomeLayout />
}

export default { title: 'Layouts/HomeLayout' }
