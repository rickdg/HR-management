from rest_framework import viewsets
from tms.models import Account
from tms.serializers import AccountSerializer


class AccountsView(viewsets.ViewSet):
    serializer_class = AccountSerializer

    def list(self, request):
        pass

    def create(self, request):
        pass

    def retrieve(self, request, pk=None):
        pass

    def update(self, request, pk=None):
        pass

    def partial_update(self, request, pk=None):
        pass

    def destroy(self, request, pk=None):
        pass
