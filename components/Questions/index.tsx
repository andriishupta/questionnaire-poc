'use client'

import { useState } from 'react'
import { submitQuestionAction } from '@/app/actions'

export const QuestionForm = ({ activeQaRoundId }: { activeQaRoundId: number }) => {
  const [question, setQuestion] = useState('')

  return (
    <form action={(e) => submitQuestionAction({ qaRoundId: activeQaRoundId, question })}>
      <h2>Submit Question:</h2>
      <input value={question} onChange={(e) => setQuestion(e.target.value)} className="border-2 border-slate-500"/>
      <button
        type="submit"
        className="py-2 px-4 rounded-md no-underline bg-btn-background hover:bg-btn-background-hover"
      >
        Submit
      </button>
    </form>
  )
}