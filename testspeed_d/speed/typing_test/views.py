from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse

@login_required
def home(request):
    try:
        # Your view logic here
        return render(request, 'typing_test/home.html')
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)  # Return error message in response
