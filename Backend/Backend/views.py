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
        html_content = f"<p><b>Name:</b> {name}</p><p><b>Email:</b> {email}</p><p><b>Message:</b><br>{message}</p>"

        result = send_email(settings.EMAIL_RECEIVER, subject, html_content)
        if not result:
            return JsonResponse({"status": "error", "message": "Email sending failed"}, status=500)

        return JsonResponse({"status": "success", "message": "Email sent successfully!"}, status=200)

    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)
