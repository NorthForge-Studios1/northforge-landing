import resend
import os
import json
from firebase_functions import https_fn, options
from firebase_admin import initialize_app

initialize_app()


@https_fn.on_request(
    secrets=["RESEND_API_KEY"],
    cors=options.CorsOptions(
        cors_origins="*",
        cors_methods=["POST", "GET"],
    ),
)
def send_submission(req: https_fn.Request) -> https_fn.Response:
    if req.method != "POST":
        return https_fn.Response("Method not allowed", status=405)

    try:
        data = req.get_json(silent=True) or {}

        name = data.get("name", "")
        project = data.get("project", "Unknown")
        url = data.get("url", "")
        email = data.get("email", "")
        message = data.get("message", "")

        resend.api_key = os.environ.get("RESEND_API_KEY")

        html_body = f"""
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1e293b;">
            <div style="background:#080b12;padding:24px 32px;border-radius:12px 12px 0 0;">
                <h1 style="color:#67e8f9;font-size:20px;margin:0;">
                    NorthForge Studios — New Submission
                </h1>
            </div>
            <div style="background:#f8fafc;padding:32px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px;">
                <table style="width:100%;border-collapse:collapse;">
                    <tr>
                        <td style="padding:10px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;width:120px;vertical-align:top;">Name</td>
                        <td style="padding:10px 0;font-weight:600;color:#0f172a;">{name}</td>
                    </tr>
                    <tr style="border-top:1px solid #e2e8f0;">
                        <td style="padding:10px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">Project</td>
                        <td style="padding:10px 0;font-weight:600;color:#0f172a;">{project}</td>
                    </tr>
                    <tr style="border-top:1px solid #e2e8f0;">
                        <td style="padding:10px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">URL</td>
                        <td style="padding:10px 0;">
                            <a href="{url}" style="color:#3b82f6;">{url}</a>
                        </td>
                    </tr>
                    <tr style="border-top:1px solid #e2e8f0;">
                        <td style="padding:10px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">Reply to</td>
                        <td style="padding:10px 0;">
                            <a href="mailto:{email}" style="color:#3b82f6;">{email}</a>
                        </td>
                    </tr>
                    <tr style="border-top:1px solid #e2e8f0;">
                        <td style="padding:10px 0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;vertical-align:top;">Message</td>
                        <td style="padding:10px 0;line-height:1.6;white-space:pre-wrap;">{message}</td>
                    </tr>
                </table>
            </div>
            <p style="color:#94a3b8;font-size:11px;text-align:center;margin-top:16px;">
                Sent via northforgestudios.tech contact form
            </p>
        </div>
        """

        resend.Emails.send({
            "from": "NorthForge Studios <noreply@northforgestudios.tech>",
            "to": ["contacto@northforgestudios.tech"],
            "reply_to": [email],
            "subject": f"[NorthForge] Project Submission: {project}",
            "html": html_body,
        })

        return https_fn.Response(
            json.dumps({"success": True}),
            status=200,
            headers={"Content-Type": "application/json"},
        )

    except Exception as e:
        return https_fn.Response(
            json.dumps({"success": False, "error": str(e)}),
            status=500,
            headers={"Content-Type": "application/json"},
        )
