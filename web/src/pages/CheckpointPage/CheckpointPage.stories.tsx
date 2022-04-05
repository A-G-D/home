import CheckpointPage from './CheckpointPage'
import { SiteStatus } from 'src/constants/constants'

export const Construction = () => {
  return <CheckpointPage status={SiteStatus.CONSTRUCTION} />
}

export const Upgrade = () => {
  return <CheckpointPage status={SiteStatus.UPGRADE} />
}

export const MAINTENANCE = () => {
  return <CheckpointPage status={SiteStatus.MAINTENANCE} />
}

export const DOWN = () => {
  return <CheckpointPage status={SiteStatus.DOWN} />
}

export default { title: 'Pages/CheckpointPage' }
