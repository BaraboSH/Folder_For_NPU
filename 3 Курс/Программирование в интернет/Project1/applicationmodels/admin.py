from django.contrib import admin
from . import models


# Register your models here.
admin.site.register(models.Example)
# admin.site.register(models.Author)
admin.site.register(models.Book)
admin.site.register(models.Place)
admin.site.register(models.Publication)
admin.site.register(models.Restaurant)
admin.site.register(models.Waiter)

class AuthorAdmin(admin.ModelAdmin):
    fields = ["Fname", "DateOfBirth"]
    list_filter =["Fname"]
    class Meta:
        model = models.Author

admin.site.register(models.Author, AuthorAdmin)