import { MetaTags } from '@redwoodjs/web'
import { profile } from 'src/constants/links'
import { SiteStatus } from 'src/constants/constants'
import { useSettings } from 'src/lib/hooks'

const ConstructionStatus = () => {
  return (
    <main className='bg-gray-200/80 flex-center flex-col gap-8 p-4 w-[50%] rounded-lg'>
      <h1 className='text-xl font-semibold uppercase'>
        Constructing Website...
      </h1>
      <p>The construction of this website is still ongoing.</p>

      <h2>Site Progress:</h2>
      <p></p>

      <p>
        If you want to see the Site Preview, DM me on my{' '}
        <a href={profile.linkedin}>LinkedIn</a>.
      </p>
    </main>
  )
}

const UpgradeStatus = () => {
  return (
    <main className='bg-gray-200/80 flex-center flex-col gap-8 p-4 w-[50%] rounded-lg'>
      <h1 className='text-xl font-semibold uppercase'>Upgrading...</h1>

      <p>This website is currently being upgraded. Please come again later.</p>

      <p>
        If you want to see the Site Preview, DM me on my{' '}
        <a href={profile.linkedin}>LinkedIn</a>.
      </p>
    </main>
  )
}

const MaintenanceStatus = () => {
  return (
    <main className='bg-gray-200/80 flex-center flex-col gap-8 p-4 w-[50%] rounded-lg'>
      <h1 className='text-xl font-semibold uppercase'>
        Site Under Maintenance
      </h1>

      <p>
        This website is currently undergoing maintenace. Please come again
        later. Thank you for your patience.
      </p>

      <p>
        If you want to say something, DM me on my{' '}
        <a href={profile.linkedin}>LinkedIn</a>.
      </p>
    </main>
  )
}

const DownStatus = () => {
  return (
    <main className='bg-gray-200/80 flex-center flex-col gap-8 p-4 w-[50%] rounded-lg'>
      <h1 className='text-xl font-semibold uppercase'>Website is Down</h1>

      <p>This website is experiencing downtime.</p>

      <p>For updates, you may follow me on my social accounts:</p>

      <ul>
        <li>
          <a href={profile.linkedin}>LinkedIn</a>
        </li>
        <li>
          <a href={profile.twitter}>Twitter</a>
        </li>
      </ul>
    </main>
  )
}

const Status = ({ status }): JSX.Element => {
  switch (status) {
    case SiteStatus.CONSTRUCTION:
      return <ConstructionStatus />
    case SiteStatus.UPGRADE:
      return <UpgradeStatus />
    case SiteStatus.MAINTENANCE:
      return <MaintenanceStatus />
  }
  return <DownStatus />
}

const CheckpointPage = () => {
  const { settings } = useSettings()

  if (!settings) return <></>

  return (
    <>
      <MetaTags title='Checkpoint' description='Checkpoint' />

      <Status status={settings.status} />
    </>
  )
}

export default CheckpointPage
