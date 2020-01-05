from django.urls import reverse
from rest_framework.test import APITestCase, APIClient
from expects import *
import json

class BaseViewTest(APITestCase):
    client = APIClient()

class GetAllDoctorsTest(BaseViewTest):

    def test_doctors_endpoint(self):
        response = self.client.get(
            reverse("doctors-all"), {'location': 'co-denver'}
        )
        expect(response.status_code).to(equal(200))

        data = json.loads(response.content)

        expect(data[0]['practice']['name']).to(equal('Esther Langmack, MD'))
        expect(data[0]['practice']['location']).to(equal('co-denver'))
        expect(data[0]['practice']['lat']).to(equal(39.7392))
        expect(data[0]['practice']['lon']).to(equal(-104.94187))
