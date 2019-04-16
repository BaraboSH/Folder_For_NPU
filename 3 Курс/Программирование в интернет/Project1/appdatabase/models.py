from django.db import models

# Create your models here.
class Human(models.Model):
    COMPANIES=(
        ('DataArt','DataArt'),
        ('EPAM','EPAM'),
        ('DiceUS','DiceUS'),
        ('SoftServe','SoftServe'),
        ('GlobalLogic','GlobalLogic')
    )
    POSITIONS=(
        ('Junior','Junior'),
        ('Middle','Middle'),
        ('Senior','Senior')   
    )
    LANGUAGES=(
        ('C#','C#'),
        ('CPP','C++'),
        ('Python','DiceUS'),
        ('JS','JavaScript'),
        ('PHP','PHP')
    )
    Name = models.CharField(max_length = 50)
    Surname = models.CharField(max_length = 150)
    Birth = models.DateField()
    Company = models.CharField(max_length=150,choices=COMPANIES)
    Position = models.CharField(max_length=15,choices=POSITIONS)
    Language = models.CharField(max_length=10,choices=LANGUAGES,default=LANGUAGES[0])
    Salary = models.IntegerField()
    objects = models.Manager()

    def __str__(self):
        return 'Прізвище:{},  Імя: {},  Компанія: {}'.format(self.Surname,self.Name,self.Company)
    class Meta():
        verbose_name = 'Людина'
        verbose_name_plural = 'Люди'