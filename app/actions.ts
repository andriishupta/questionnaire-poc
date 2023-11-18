'use server'

import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

export async function submitQuestionAction({ qaRoundId, question }: any) {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  return supabase.from('questions').insert({
    question,
    qa_round_id: qaRoundId
  })
}
