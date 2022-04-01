export const formattedDate = (datetime): string => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${month} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`
}

export const getRootContainer = (): Element => {
  return document.getElementById('redwood-app')
}
