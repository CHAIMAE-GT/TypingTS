from django.test import TestCase
from django.urls import reverse
from .models import CustomText
from .views import home  # Import the home view

class HomeViewTests(TestCase):
    def setUp(self):
        # Set up any necessary data for the tests
        CustomText.objects.create(text='Test text')

    def test_home_view_success_case(self):
        # Test a success case of the home view
        response = self.client.get(reverse('home'))  # Use 'home' as the view name
        self.assertEqual(response.status_code, 200)

    def test_home_view_error_case(self):
        # Test an error case of the home view
        response = self.client.get(reverse('non-existent-view'))
        self.assertEqual(response.status_code, 404)
