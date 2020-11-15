import { db } from 'src/lib/db'

export const scenarios = () => {
  return db.scenario.findMany()
}

export const createScenario = ({ input }) => {
  return db.scenario.create({ data: input })
}
