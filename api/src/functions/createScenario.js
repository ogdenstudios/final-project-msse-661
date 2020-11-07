import Scenario from '../lib/scenarios/scenario'

export const handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      scenario: Scenario(),
    }),
  }
}
