import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  website?: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { firstName, lastName, email, phone, company, website, service, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact emails for:", email);

    // Send confirmation email to the submitter
    const confirmationEmail = await resend.emails.send({
      from: "Market Integrators <noreply@marketintegrators.com>",
      to: [email],
      subject: "Thank You for Contacting Market Integrators",
      html: `
        <h1>Thank you for reaching out, ${firstName}!</h1>
        <p>We've received your inquiry and will get back to you within 24 hours.</p>
        <h2>Your Submission Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
          ${website ? `<li><strong>Website:</strong> ${website}</li>` : ''}
          <li><strong>Service Interest:</strong> ${service}</li>
          <li><strong>Message:</strong> ${message}</li>
        </ul>
        <p>Best regards,<br>The Market Integrators Team</p>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    // Send notification to Market Integrators
    const notificationEmail = await resend.emails.send({
      from: "Market Integrators Contact Form <noreply@marketintegrators.com>",
      to: ["marketintegrator@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <h2>Contact Details:</h2>
        <ul>
          <li><strong>Name:</strong> ${firstName} ${lastName}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone}</li>
          ${company ? `<li><strong>Company:</strong> ${company}</li>` : ''}
          ${website ? `<li><strong>Website:</strong> ${website}</li>` : ''}
          <li><strong>Service Interest:</strong> ${service}</li>
        </ul>
        <h2>Message:</h2>
        <p>${message}</p>
      `,
    });

    console.log("Notification email sent:", notificationEmail);

    return new Response(
      JSON.stringify({ 
        success: true,
        confirmationEmail,
        notificationEmail 
      }), 
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending contact emails:", error);
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
