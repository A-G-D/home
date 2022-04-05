import CheckpointPage from './CheckpointPage'
import { SiteStatus } from 'src/constants/constants'

export const Construction = () => {
  return <CheckpointPage status={SiteStatus.CONSTRUCTION} />
}

export const Upgrade = () => {
  return <CheckpointPage status={SiteStatus.UPGRADE} />
}

export const Maintenance = () => {
  return <CheckpointPage status={SiteStatus.MAINTENANCE} />
}

export const Down = () => {
  return <CheckpointPage status={SiteStatus.DOWN} />
}

export default { title: 'Pages/CheckpointPage' }
