export const formattedDate = (datetime): string => {
  const parsedDate = new Date(datetime)
  const month = parsedDate.toLocaleString('default', { month: 'long' })
  return `${month} ${parsedDate.getDate()}, ${parsedDate.getFullYear()}`
}
