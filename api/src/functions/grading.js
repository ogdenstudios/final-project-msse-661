// import Grade from '../lib/grade/grade'

import Grade from 'src/lib/grade/grade'

export const handler = (event, context, callback) => {
  const payload = JSON.parse(event.body)
  return callback(null, { statusCode: 200, body: Grade(payload) })
}
