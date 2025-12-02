import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.48.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const supabaseUrl = Deno.env.get("SUPABASE_URL") ?? "https://wtjuzhjddqekvqmjbsdn.supabase.co";
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface GetBookedSlotsRequest {
  date: string;
}

serve(async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { date }: GetBookedSlotsRequest = await req.json();

    if (!date) {
      return new Response(
        JSON.stringify({ error: "Missing required field: date" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        },
      );
    }

    const { data, error } = await supabase
      .from("calendar_appointments")
      .select("scheduled_time")
      .eq("scheduled_date", date);

    if (error) {
      console.error("Error fetching booked slots from database:", error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch booked slots" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        },
      );
    }

    const slots = (data ?? []).map((row: { scheduled_time: string }) => row.scheduled_time);

    return new Response(
      JSON.stringify({ slots }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  } catch (error) {
    console.error("Unexpected error in get-booked-slots function:", error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      },
    );
  }
});
