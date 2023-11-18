import DeployButton from '../../components/DeployButton'
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import Step from '@/components/Step'
import { QuestionForm } from '@/components/Questions'

export default async function Index() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: rounds } = await supabase
    .from('qa_rounds')
    .select(`
    *,
    questions(*)
  `)

  const handleAnswer = () => {

  }

  return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
      <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
        <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <DeployButton/>
        </div>
      </nav>

      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <main className="flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-4xl mb-4">Question Rounds</h2>
          {rounds?.length ? rounds?.map(round =>
              <Step key={round.id} title={round.name}>
                {round.questions?.length
                  ? round.questions.map(question => (
                    <div key={question.id} className="flex">
                      <h4>{question.question}</h4>&nbsp;
                      {
                        question.answer || <b>No answer</b>
                      }
                    </div>
                  ))
                  : 'No questions'
                }
              </Step>
            )
            : 'No Rounds'
          }
          { rounds?.length && <QuestionForm activeQaRoundId={rounds[rounds.length-1].id}/> }
        </main>
      </div>

      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
  )
}
