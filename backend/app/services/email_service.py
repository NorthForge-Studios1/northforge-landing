import os
import resend
from dotenv import load_dotenv

load_dotenv()


def send_submission_email(
    name: str,
    project: str,
    url: str,
    email: str,
    message: str,
) -> None:
    resend.api_key = os.getenv("RESEND_API_KEY")

    html_body = f"""
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <div style="background: #080b12; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #67e8f9; font-size: 20px; margin: 0;">
                NorthForge Studios — New Submission
            </h1>
        </div>
        <div style="background: #f8fafc; padding: 32px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; width: 120px; vertical-align: top;">Name</td>
                    <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">{name}</td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Project</td>
                    <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">{project}</td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">URL</td>
                    <td style="padding: 10px 0;">
                        <a href="{url}" style="color: #3b82f6;">{url}</a>
                    </td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Reply to</td>
                    <td style="padding: 10px 0;">
                        <a href="mailto:{email}" style="color: #3b82f6;">{email}</a>
                    </td>
                </tr>
                <tr style="border-top: 1px solid #e2e8f0;">
                    <td style="padding: 10px 0; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; vertical-align: top;">Message</td>
                    <td style="padding: 10px 0; line-height: 1.6; white-space: pre-wrap;">{message}</td>
                </tr>
            </table>
        </div>
        <p style="color: #94a3b8; font-size: 11px; text-align: center; margin-top: 16px;">
            Sent via northforgestudios.tech contact form
        </p>
    </div>
    """

    params: resend.Emails.SendParams = {
        "from": "NorthForge Studios <noreply@northforgestudios.tech>",
        "to": ["contacto@northforgestudios.tech"],
        "reply_to": [email],
        "subject": f"[NorthForge] Project Submission: {project}",
        "html": html_body,
    }

    resend.Emails.send(params)
