export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      contact_leads: {
        Row: {
          company: string | null
          consent: boolean
          created_at: string
          email: string
          first_name: string
          id: string
          last_name: string
          message: string
          phone: string | null
          service: string
          website: string | null
        }
        Insert: {
          company?: string | null
          consent?: boolean
          created_at?: string
          email: string
          first_name: string
          id?: string
          last_name: string
          message: string
          phone?: string | null
          service: string
          website?: string | null
        }
        Update: {
          company?: string | null
          consent?: boolean
          created_at?: string
          email?: string
          first_name?: string
          id?: string
          last_name?: string
          message?: string
          phone?: string | null
          service?: string
          website?: string | null
        }
        Relationships: []
      }
      job_applications: {
        Row: {
          answers: Json
          cover_letter: string | null
          created_at: string
          email: string
          full_name: string
          id: string
          job_ref: string | null
          linkedin_url: string | null
          location: string | null
          phone: string | null
          portfolio_url: string | null
          resume_url: string | null
          source: string | null
          status: string
        }
        Insert: {
          answers?: Json
          cover_letter?: string | null
          created_at?: string
          email: string
          full_name: string
          id?: string
          job_ref?: string | null
          linkedin_url?: string | null
          location?: string | null
          phone?: string | null
          portfolio_url?: string | null
          resume_url?: string | null
          source?: string | null
          status?: string
        }
        Update: {
          answers?: Json
          cover_letter?: string | null
          created_at?: string
          email?: string
          full_name?: string
          id?: string
          job_ref?: string | null
          linkedin_url?: string | null
          location?: string | null
          phone?: string | null
          portfolio_url?: string | null
          resume_url?: string | null
          source?: string | null
          status?: string
        }
        Relationships: []
      }
      jobs: {
        Row: {
          application_email: string | null
          application_url: string | null
          benefits: string | null
          created_at: string
          currency: string | null
          department_id: number | null
          description: string
          employment: Database["public"]["Enums"]["employment_type"]
          equity: string | null
          id: string
          location: string | null
          onsite_requirement: string | null
          requirements: string | null
          responsibilities: string | null
          salary_max: number | null
          salary_min: number | null
          seniority: Database["public"]["Enums"]["seniority_level"]
          slug: string | null
          status: Database["public"]["Enums"]["job_status"]
          tags: string[] | null
          team: string | null
          title: string
          updated_at: string
        }
        Insert: {
          application_email?: string | null
          application_url?: string | null
          benefits?: string | null
          created_at?: string
          currency?: string | null
          department_id?: number | null
          description: string
          employment?: Database["public"]["Enums"]["employment_type"]
          equity?: string | null
          id?: string
          location?: string | null
          onsite_requirement?: string | null
          requirements?: string | null
          responsibilities?: string | null
          salary_max?: number | null
          salary_min?: number | null
          seniority?: Database["public"]["Enums"]["seniority_level"]
          slug?: string | null
          status?: Database["public"]["Enums"]["job_status"]
          tags?: string[] | null
          team?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          application_email?: string | null
          application_url?: string | null
          benefits?: string | null
          created_at?: string
          currency?: string | null
          department_id?: number | null
          description?: string
          employment?: Database["public"]["Enums"]["employment_type"]
          equity?: string | null
          id?: string
          location?: string | null
          onsite_requirement?: string | null
          requirements?: string | null
          responsibilities?: string | null
          salary_max?: number | null
          salary_min?: number | null
          seniority?: Database["public"]["Enums"]["seniority_level"]
          slug?: string | null
          status?: Database["public"]["Enums"]["job_status"]
          tags?: string[] | null
          team?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      mi_home_metrics: {
        Row: {
          created_at: string | null
          icon: string | null
          id: string
          is_public: boolean | null
          label: string
          order_index: number | null
          suffix: string | null
          value: number
        }
        Insert: {
          created_at?: string | null
          icon?: string | null
          id?: string
          is_public?: boolean | null
          label: string
          order_index?: number | null
          suffix?: string | null
          value: number
        }
        Update: {
          created_at?: string | null
          icon?: string | null
          id?: string
          is_public?: boolean | null
          label?: string
          order_index?: number | null
          suffix?: string | null
          value?: number
        }
        Relationships: []
      }
    }
    Views: {
      careers_open_roles: {
        Row: {
          brief: string | null
          currency: string | null
          department: string | null
          employment: string | null
          location: string | null
          onsite_requirement: string | null
          salary_max: number | null
          salary_min: number | null
          seniority: string | null
          slug: string | null
          tags: string[] | null
          team: string | null
          title: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      employment_type:
        | "full_time"
        | "part_time"
        | "contract"
        | "internship"
        | "temporary"
      job_status: "draft" | "open" | "paused" | "closed"
      seniority_level:
        | "intern"
        | "junior"
        | "mid"
        | "senior"
        | "lead"
        | "manager"
        | "director"
        | "vp"
        | "cxo"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      employment_type: [
        "full_time",
        "part_time",
        "contract",
        "internship",
        "temporary",
      ],
      job_status: ["draft", "open", "paused", "closed"],
      seniority_level: [
        "intern",
        "junior",
        "mid",
        "senior",
        "lead",
        "manager",
        "director",
        "vp",
        "cxo",
      ],
    },
  },
} as const
