export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      qa_rounds: {
        Row: {
          active: boolean
          created_at: string
          id: number
          name: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          created_at?: string
          id?: number
          name: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          created_at?: string
          id?: number
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      questions: {
        Row: {
          answer: string | null
          created_at: string
          id: number
          qa_round_id: number
          question: string
          updated_at: string | null
          user_id: number | null
        }
        Insert: {
          answer?: string | null
          created_at?: string
          id?: number
          qa_round_id: number
          question: string
          updated_at?: string | null
          user_id?: number | null
        }
        Update: {
          answer?: string | null
          created_at?: string
          id?: number
          qa_round_id?: number
          question?: string
          updated_at?: string | null
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "questions_qa_round_id_fkey"
            columns: ["qa_round_id"]
            isOneToOne: false
            referencedRelation: "qa_rounds"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
