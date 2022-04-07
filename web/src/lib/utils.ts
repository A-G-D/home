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
