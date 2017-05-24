from django.views.generic import TemplateView

class IndexView(TemplateView):
    template_name = "index.html"


class ResetPasswordView(TemplateView):
    template_name = "reset_password.html"

    def get_context_data(self, **kwargs):
        context = super(ResetPasswordView, self).get_context_data(**kwargs)
        context['uidb64'] = kwargs['uidb64']
        context['token'] = kwargs['token']
        return context