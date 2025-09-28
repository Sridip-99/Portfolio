from resend import Resend
from django.conf import settings

resend = Resend(api_key=settings.RESEND_API_KEY)

def send_email(to_email, subject, html_content):
    """
    Sends email via Resend API.
    """
    try:
        response = resend.emails.send(
            from_email=settings.RESEND_SENDER_EMAIL,
            to=[to_email],
            subject=subject,
            html=html_content
        )
        print("Email sent:", response)
        return response
    except Exception as e:
        print("Error sending email:", e)
        return None
