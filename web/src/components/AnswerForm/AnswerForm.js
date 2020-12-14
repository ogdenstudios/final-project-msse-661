import React, { useEffect, useState } from 'react'

const AnswerForm = (props) => {
  const [potOdds, setPotOdds] = useState('')
  const [handStrength, setHandStrength] = useState('')

  useEffect(() => {
    setPotOdds('')
    setHandStrength('')
  }, [props.attempts])

  return (
    <div className="font-mono my-4">
      <div className="container mx-auto">
        <div className="inputs w-full max-w-2xl p-2 mx-auto">
          <form
            className="mt-6 border-t border-gray-400 pt-4"
            data-cy="answerForm"
            onSubmit={(event) =>
              props.handleSubmit(event, potOdds, handStrength)
            }
          >
            <div className="w-full md:w-full px-3 mb-6">
              <label
                htmlFor="potOdds"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                What are your pot odds?
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                data-cy="potOdds"
                name="potOdds"
                value={potOdds}
                onChange={(event) => setPotOdds(event.target.value)}
                required={true}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <label
                htmlFor="handStrength"
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                What is your approximate hand strength?
              </label>
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 shadow-inner rounded-md py-3 px-4 leading-tight focus:outline-none  focus:border-gray-500"
                data-cy="handStrength"
                name="handStrength"
                value={handStrength}
                onChange={(event) => setHandStrength(event.target.value)}
                required={true}
              />
            </div>
            <div className="w-full md:w-full px-3 mb-6">
              <button
                className="appearance-none bg-gray-200 text-gray-900 px-2 py-1 shadow-sm border border-gray-400 rounded-md mr-3"
                data-cy="submitAnswer"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AnswerForm
