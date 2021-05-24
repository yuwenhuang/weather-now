import { formatTime } from '../formatTime'

it('format time from Unix seconds to desired locale,timeStyle and time zone', () => {
  const s = 1609459200
  const result = formatTime(s)

  expect(result).toEqual('12:00 AM')
})  