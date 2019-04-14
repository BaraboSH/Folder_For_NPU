from django.db import models

# Create your models here.
class Example(models.Model):
    integer = models.IntegerField()
    positiveInteger = models.PositiveIntegerField()
    positiveSmallInteger = models.PositiveSmallIntegerField()
    bigInteger = models.BigIntegerField()
    floatt = models.FloatField()
    binary = models.BinaryField()
    boolean = models.BooleanField()
    char = models.CharField(max_length = 5)
    text = models.TextField(max_length = 20)
    data = models.DateField(auto_now = False)
    dataTime = models.DateTimeField(auto_now_add = False)
    decimal = models.DecimalField(max_digits=8,decimal_places=2)
    email = models.EmailField()
    filee = models.FileField()
    imagee = models.ImageField()

class Author(models.Model):
    Fname = models.TextField(max_length=50, verbose_name="Ім'я")
    LName = models.TextField(max_length=50, verbose_name="Прізвище")
    DateOfBirth = models.DateField(auto_now=False,verbose_name="Дата народження")
    def __str__(self):
        return 'Імя: {}, Прізвище: {}'.format(self.Fname,self.LName)
    class Meta:
        verbose_name = "Автор"
        verbose_name_plural = "Автори"

class Book(models.Model):
    GENRE = (('Poetic','Поезія'),('Detective','Детектив'),('Fantasy','Фантастика'),('Computer science','Прикладна література'),('Science','Научпоп'))
    Author = models.ForeignKey(Author,on_delete=models.CASCADE,verbose_name = "Автор")
    Name = models.CharField(max_length=50, verbose_name = "Назва")
    Description = models.TextField(max_length=1000, verbose_name="Опис")
    Genre = models.CharField(max_length = 50, choices = GENRE, verbose_name = "Жанр")
    def __str__(self):
        return '{}'.format(self.Name)
    class Meta:
        verbose_name = "Книга"
        verbose_name_plural = "Книги"

class Place(models.Model):
    Name = models.CharField(max_length = 50,verbose_name = "Назва")
    Address = models.CharField(max_length = 50,verbose_name = "Адреса")
    def __str__(self):
        return '{}'.format(self.Name)
    class Meta:
        verbose_name = "Місце"
        verbose_name_plural = "Місця"

class Restaurant(models.Model):
    Place = models.OneToOneField(Place,on_delete = models.CASCADE, primary_key = True)
    Delivery = models.BooleanField(verbose_name = "Доставка")
    RoundTheClock = models.BooleanField(verbose_name = "Цілодобово") 
    def __str__(self):
        return '{}'.format(self.Place.Name)
    class Meta:
        verbose_name = "Ресторан"
        verbose_name_plural = "Ресторани"

class Waiter(models.Model):
    Restaurant = models.ForeignKey(Restaurant,on_delete=models.CASCADE)
    Name = models.CharField(max_length = 50, verbose_name = "Назва")
    def __str__(self):
        return '{}:{}'.format(self.Name, self.Restaurant.Place.Name)
    class Meta:
        verbose_name = "Офіціант"
        verbose_name_plural = "Офіціанти"

class Publication(models.Model):
    Name = models.CharField(max_length = 50,verbose_name = "Назва")
    def __str__(self):
        return '{}'.format(self.name)
    class Meta:
        verbose_name = "Публікація"
        verbose_name_plural = "Публікації"

class Article(models.Model):
    Name = models.CharField(max_length = 50,verbose_name = "Назва")
    Publications = models.ManyToManyField(Publication)
    def __str__(self):
        return '{}'.format(self.Name)
    class Meta:
        verbose_name = "Стаття"
        verbose_name_plural = "Статті"
