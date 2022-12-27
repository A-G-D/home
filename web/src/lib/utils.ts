export const formattedDateTime = (
  datetime
): { date: string; time: string; dateTime: string } => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  const date = `${month} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`
  const time = `${parsedDate.getHours()}:${parsedDate.getMinutes()}:${parsedDate.getSeconds()}`
  const dateTime = `${date} ${time}`
  return { date, time, dateTime }
}

export const formattedDate = (dateTime): string => {
  return formattedDateTime(dateTime).date
}

export const formattedTime = (dateTime): string => {
  return formattedDateTime(dateTime).time
}

export const getRootContainer = (): Element => {
  return document.getElementById('redwood-app')
}

export const getDevIcon = (path: string): string => {
  return `https://github.com/devicons/devicon/raw/master/icons/${path}`
}

export const toArray = <T = any>(value: any): T[] => {
  return value == null ? [] : Array.isArray(value) ? value : [value]
}

export const rotateLeft = <T = any>(a: T[], delta: number): void => {
  a.push(...a.splice(0, delta))
}

export const rotateRight = <T = any>(a: T[], delta: number): void => {
  a.splice(0, 0, ...a.splice(a.length - delta))
}

/**
 * @delta - number of items to rotate, if < 0, rotate left, else rotate right
 */
export const rotate = <T = any>(a: T[], delta: number): void => {
  if (delta === 0) return
  if (delta < 0) {
    rotateLeft(a, -delta)
  } else {
    rotateRight(a, delta)
  }
}

export const clamp = (
  value: number,
  min: number = 0,
  max: number = 1
): number => {
  return Math.min(Math.max(value, min), max)
}

export const updateElement = (element: React.ReactElement, props) => {
  const eProps = element.props
  const className = [eProps?.className, props?.className].join(' ')
  const style = { ...(eProps?.style ?? {}), ...(props?.style ?? {}) }
  const children = [...toArray(eProps?.children), ...toArray(props?.children)]
  return React.cloneElement(
    element,
    { ...(element.props ?? {}), className, style },
    ...children
  )
}

export const Library = {
  Root: {
    get: (path: string): string => `https://a_g_d.keybase.pub/${path}`,
  },
  Documents: {
    get: (path: string): string => Library.Root.get(`Documents/${path}`),
  },
  Music: {
    get: (path: string): string => Library.Root.get(`Music/${path}`),
  },
  Pictures: {
    get: (path: string): string => Library.Root.get(`Pictures/${path}`),
  },
  Videos: {
    get: (path: string): string => Library.Root.get(`Videos/${path}`),
  },
}

// Reference: https://javascript.plainenglish.io/manage-dynamic-and-custom-subdomains-in-react-31154559694
export const getSubdomain = () => {
  const host = window.location.host
  const subdomains = host
    .split('.')
    .slice(0, host.includes('localhost') ? -1 : -2)
  return subdomains.length > 0 ? subdomains.join('.') : null
}

export const getDomain = () => {
  const host = window.location.host
  const domain = host.split('.').slice(host.includes('localhost') ? -1 : -2)
  return domain.join('.')
}
