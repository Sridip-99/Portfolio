from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def contact_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body.decode("utf-8"))  # decode for safety
        except Exception as e:
            return JsonResponse({"status": "error", "message": f"Invalid JSON: {str(e)}"}, status=400)

        name = data.get("name")
        email = data.get("email")
        message = data.get("message")

        if not name or not email or not message:
            return JsonResponse({"status": "error", "message": "All fields are required"}, status=400)

        subject = f"{name} sent you a message from your Portfolio"

        try:
            send_mail(
                subject,
                message=f"Email: {email}\n\nMessage:\n{message}\n\nName:\n{name}",
                from_email=settings.EMAIL_HOST_USER,
                recipient_list=[settings.EMAIL_RECEIVER],
                fail_silently=False,
            )
        except Exception as e:
            return JsonResponse({"status": "error", "message": f"Email sending failed: {str(e)}"}, status=500)

        return JsonResponse({"status": "success", "message": "Email sent successfully!"}, status=200)

    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)
