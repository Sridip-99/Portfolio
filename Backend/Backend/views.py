from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .utils.email_sender import send_email
from django.conf import settings

@csrf_exempt
def contact_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))
        except Exception as e:
            return JsonResponse({"status": "error", "message": f"Invalid JSON: {str(e)}"}, status=400)

        name = data.get("name")
        email = data.get("email")
        message = data.get("message")

        if not name or not email or not message:
            return JsonResponse({"status": "error", "message": "All fields are required"}, status=400)

        subject = f"{name} sent you a message from your Portfolio"
        html_content = f"""
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e0e0e0; border-radius: 8px; padding: 20px; background-color: #fafafa;">
  <h2 style="color: #2c3e50; text-align: center; margin-bottom: 20px;">📩 New Contact Form Submission</h2>
  
  <p style="font-size: 16px; color: #333;">
    <b style="color: #2c3e50;">Name:</b> {name}
  </p>
  
  <p style="font-size: 16px; color: #333;">
    <b style="color: #2c3e50;">Email:</b> {email}
  </p>
  
  <div style="margin-top: 20px; padding: 15px; background: #ffffff; border-radius: 6px; border-left: 4px solid #3498db;">
    <p style="font-size: 16px; color: #555; margin: 0;">
      <b style="color: #2c3e50;">Message:</b><br>
      {message}
    </p>
  </div>

  <hr style="margin: 25px 0; border: none; border-top: 1px solid #ddd;"/>
  <p style="font-size: 13px; color: #888; text-align: center;">
    This email was sent from your <b>Portfolio Contact Form</b>.
  </p>
</div>
"""

        result = send_email(settings.EMAIL_RECEIVER, subject, html_content)
        if not result:
            return JsonResponse({"status": "error", "message": "Email sending failed"}, status=500)

        return JsonResponse({"status": "success", "message": "Email sent successfully!"}, status=200)

    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)

