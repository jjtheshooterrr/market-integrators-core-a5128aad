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
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 40px 0; text-align: center; background-color: #000000;">
                  <img src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-transparent.webp" alt="Market Integrators Logo" style="max-width: 200px; height: auto;">
                </td>
              </tr>
              <tr>
                <td style="padding: 0;">
                  <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 40px 30px;">
                        <h1 style="margin: 0 0 20px 0; color: #dc2626; font-size: 28px; font-weight: bold;">Thank You, ${firstName}!</h1>
                        <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.6;">We've received your inquiry and appreciate you reaching out to Market Integrators. Our team will review your message and get back to you within 24 hours.</p>
                        
                        <div style="background-color: #f9f9f9; border-left: 4px solid #dc2626; padding: 20px; margin: 30px 0;">
                          <h2 style="margin: 0 0 15px 0; color: #000000; font-size: 20px; font-weight: bold;">Your Submission Details</h2>
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Name:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Email:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${email}</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Phone:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${phone}</td>
                            </tr>
                            ${company ? `
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Company:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${company}</td>
                            </tr>
                            ` : ''}
                            ${website ? `
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Website:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${website}</td>
                            </tr>
                            ` : ''}
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Service Interest:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${service}</td>
                            </tr>
                          </table>
                          <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0e0e0;">
                            <strong style="color: #000000; font-size: 14px;">Your Message:</strong>
                            <p style="margin: 10px 0 0 0; color: #333333; font-size: 14px; line-height: 1.6;">${message}</p>
                          </div>
                        </div>
                        
                        <p style="margin: 30px 0 0 0; color: #666666; font-size: 14px; line-height: 1.6;">Best regards,<br><strong style="color: #dc2626;">The Market Integrators Team</strong></p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px 20px; text-align: center; background-color: #000000;">
                  <p style="margin: 0; color: #999999; font-size: 12px;">© 2025 Market Integrators. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    console.log("Confirmation email sent:", confirmationEmail);

    // Send notification to Market Integrators
    const notificationEmail = await resend.emails.send({
      from: "Market Integrators Contact Form <noreply@marketintegrators.com>",
      to: ["marketintegrator@gmail.com"],
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #f5f5f5;">
            <table role="presentation" style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 40px 0; text-align: center; background-color: #000000;">
                  <img src="https://wtjuzhjddqekvqmjbsdn.supabase.co/storage/v1/object/public/imagebuck/marketintegrators-logo-transparent.webp" alt="Market Integrators Logo" style="max-width: 200px; height: auto;">
                </td>
              </tr>
              <tr>
                <td style="padding: 0;">
                  <table role="presentation" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-collapse: collapse;">
                    <tr>
                      <td style="padding: 40px 30px;">
                        <div style="background-color: #dc2626; color: #ffffff; padding: 15px 20px; margin: 0 0 30px 0; border-radius: 5px;">
                          <h1 style="margin: 0; font-size: 24px; font-weight: bold;">🔔 New Contact Form Submission</h1>
                        </div>
                        
                        <div style="background-color: #f9f9f9; border-left: 4px solid #dc2626; padding: 20px; margin: 0 0 20px 0;">
                          <h2 style="margin: 0 0 15px 0; color: #000000; font-size: 20px; font-weight: bold;">Contact Details</h2>
                          <table role="presentation" style="width: 100%; border-collapse: collapse;">
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px; width: 140px;"><strong style="color: #000000;">Name:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${firstName} ${lastName}</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Email:</strong></td>
                              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #dc2626; text-decoration: none; font-size: 14px;">${email}</a></td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Phone:</strong></td>
                              <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #dc2626; text-decoration: none; font-size: 14px;">${phone}</a></td>
                            </tr>
                            ${company ? `
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Company:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${company}</td>
                            </tr>
                            ` : ''}
                            ${website ? `
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Website:</strong></td>
                              <td style="padding: 8px 0;"><a href="${website}" style="color: #dc2626; text-decoration: none; font-size: 14px;">${website}</a></td>
                            </tr>
                            ` : ''}
                            <tr>
                              <td style="padding: 8px 0; color: #666666; font-size: 14px;"><strong style="color: #000000;">Service Interest:</strong></td>
                              <td style="padding: 8px 0; color: #333333; font-size: 14px;">${service}</td>
                            </tr>
                          </table>
                        </div>
                        
                        <div style="background-color: #f9f9f9; border-left: 4px solid #000000; padding: 20px; margin: 20px 0 0 0;">
                          <h2 style="margin: 0 0 15px 0; color: #000000; font-size: 20px; font-weight: bold;">Message</h2>
                          <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                        </div>
                        
                        <div style="margin-top: 30px; padding: 20px; background-color: #fef2f2; border-radius: 5px; text-align: center;">
                          <p style="margin: 0; color: #dc2626; font-size: 14px; font-weight: bold;">⏰ Remember to respond within 24 hours!</p>
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px 20px; text-align: center; background-color: #000000;">
                  <p style="margin: 0; color: #999999; font-size: 12px;">© 2025 Market Integrators. All rights reserved.</p>
                </td>
              </tr>
            </table>
          </body>
        </html>
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
