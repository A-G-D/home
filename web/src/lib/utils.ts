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

export const toArray = (value: any): Array<any> => {
  return value == null ? [] : Array.isArray(value) ? value : [value]
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
