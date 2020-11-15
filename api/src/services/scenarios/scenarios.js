import { db } from 'src/lib/db'

export const scenarios = () => {
  return db.scenario.findMany()
}
