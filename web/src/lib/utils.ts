export const formattedDateTime = (datetime): { date: string; time: string } => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  const date = `${month} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`
  const time = `${parsedDate.getHours()}:${parsedDate.getMinutes()}:${parsedDate.getSeconds()}`
  return { date, time }
}

export const getRootContainer = (): Element => {
  return document.getElementById('redwood-app')
}
