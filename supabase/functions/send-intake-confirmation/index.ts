import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_INTAKE"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface IntakeConfirmationRequest {
  customerName: string;
  customerEmail: string;
  scheduledDate: string;
  scheduledTime: string;
  company: string;
  phone?: string;
  selectedServices: string[];
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { 
      customerName, 
      customerEmail, 
      scheduledDate, 
      scheduledTime,
      company,
      phone,
      selectedServices 
    }: IntakeConfirmationRequest = await req.json();

    console.log("Sending intake confirmation emails for:", customerEmail);

    // Format the date nicely
    const formattedDate = new Date(scheduledDate).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Send email to company
    const companyEmail = await resend.emails.send({
      from: "Market Integrators <noreply@marketintegrators.com>",
      to: ["marketintegrators@gmail.com"],
      subject: `New Client Consultation Scheduled - ${customerName}`,
      html: `
        <h1>New Client Consultation Scheduled</h1>
        <p><strong>Client:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Scheduled:</strong> ${formattedDate} at ${scheduledTime}</p>
        <p><strong>Services Interested In:</strong></p>
        <ul>
          ${selectedServices.map(service => `<li>${service}</li>`).join('')}
        </ul>
      `,
    });

    console.log("Company email sent:", companyEmail);

    // Send confirmation email to customer
    const customerConfirmation = await resend.emails.send({
      from: "Market Integrators <noreply@marketintegrators.com>",
      to: [customerEmail],
      subject: "Your Consultation is Scheduled!",
      html: `
        <h1>Thank You, ${customerName}!</h1>
        <p>Your consultation call with Market Integrators has been scheduled.</p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h2 style="margin-top: 0;">Consultation Details</h2>
          <p><strong>Date:</strong> ${formattedDate}</p>
          <p><strong>Time:</strong> ${scheduledTime}</p>
          <p><strong>Services to Discuss:</strong></p>
          <ul>
            ${selectedServices.map(service => `<li>${service}</li>`).join('')}
          </ul>
        </div>

        <p><strong>What to expect:</strong></p>
        <p>During this 30-minute consultation, we'll discuss your goals, review your intake responses, and create a customized strategy for your project.</p>
        
        <p>We look forward to speaking with you!</p>
        
        <p>Best regards,<br>
        The Market Integrators Team</p>
      `,
    });

    console.log("Customer confirmation sent:", customerConfirmation);

    return new Response(
      JSON.stringify({ 
        success: true,
        companyEmail,
        customerConfirmation 
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-intake-confirmation:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
