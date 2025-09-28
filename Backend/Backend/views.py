from django.core.mail import send_mail
from django.conf import settings
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def contact_view(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get("name")
        email = data.get("email")
        message = data.get("message")
        subject = f"{name} send you a message from your Portfolio"

        send_mail(
            subject,
            message=f"Email: {email}\n\nMessage:\n{message}\n\nName:\n{name}",
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[settings.EMAIL_RECEIVER],  # where you want to receive
            fail_silently=False,
        )

        return JsonResponse({"status": "success", "message": "Email sent successfully!"}, status=200)
    return JsonResponse({"status": "error", "message": "Invalid request"}, status=400)
