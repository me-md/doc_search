from rest_framework import serializers
from django.http import HttpResponse
from .models import Provider
import json
from doc_search_api.objects.doctor import Doctor
from doc_search_api.formatters.doctors_formatter import DoctorsFormatter

class DocSerializer():
    def doctors(doc_data, provider, coords, location):
        docs = []
        format = json.loads(doc_data)
        for doc in format['data']:
            if provider is not None:
                if provider in doc['practices'][0]['insurance_uids']:
                    docs.append(Doctor(doc))
            else:
                docs.append(Doctor(doc))
        return HttpResponse(DoctorsFormatter(coords).format(docs, location))

class ProvidersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = ('uid', 'name', 'nick_name')
