from django.urls import path

from sbooks_be.users.views import (
    user_redirect_view,
    user_update_view,
    user_detail_view,
    test_upload,
)

app_name = "users"
urlpatterns = [
    path("test_upload/", view=test_upload, name="test_upload"),
    path("~redirect/", view=user_redirect_view, name="redirect"),
    path("~update/", view=user_update_view, name="update"),
    path("<str:username>/", view=user_detail_view, name="detail"),
]
