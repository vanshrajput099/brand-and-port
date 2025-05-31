import { Resend } from 'resend';

export async function POST(req) {
    try {
        const body = await req.json();
        const { name, email, location, companyName, helpWith } = body;

        if ([name, email, location, companyName, helpWith].some((ele) => ele.trim() === "")) {
            return new Response(JSON.stringify({ error: 'Missing required fields' }), {
                status: 400,
            });
        }

        const resend = new Resend(process.env.RESEND_API);

        const res = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: "vanshrajput099@gmail.com",
            subject: 'New Contact Request',
            html: `
            <div style="font-family: 'Helvetica', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #f9f9f9;">
                <h2 style="color: #2c3e50; border-bottom: 2px solid #e0e0e0; padding-bottom: 10px;">📩 New Message from Contact Form</h2>
                <p>Name: ${name}</p>
                <p>Email: <a href="mailto:${email}" style="color: #2980b9;">${email}</a></p>
                <p>Location: ${location || 'N/A'}</p>
                <p>Company: ${companyName || 'N/A'}</p>
                <p>Help With: ${helpWith}</p>
                <hr style="margin: 20px 0;">
                <p style="font-size: 12px; color: #888;">This message was sent via your website's contact form.</p>
            </div>
          `,
        });

        return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
            status: 200,
        });

    } catch (error) {
        console.error('Email sending error:', error);
        return new Response(JSON.stringify({ error: 'Failed to send email' }), {
            status: 500,
        });
    }
}
