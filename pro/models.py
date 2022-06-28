from email import contentmanager
from django.db import models
from django.urls import reverse

class News(models.Model):
    name = models.CharField(max_length=255, verbose_name='Заголовок') # Заголовок с ограничением в 255 символов
    content = models.TextField(blank=True, verbose_name='Новость') # Сюда мы 
    image = models.ImageField(upload_to='photos/%Y/%m/%d', verbose_name='Изображение') # Добавление фото
    time_create = models.DateTimeField(auto_now_add=True, verbose_name='Время публикации') # Время создания 
    time_update = models.DateTimeField(auto_now=True, verbose_name='Время редактирования') # Время редактирования
    is_published = models.BooleanField(default=True, verbose_name='Опубликован') # Опубликован или нет?

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('post', kwargs={'post_id': self.pk})