export const formatTime = (s: number): string => {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    timeStyle: 'short',
    timeZone: 'UTC'
  })
  const result = dtFormat.format(new Date(s * 1e3))
  
  return result
}