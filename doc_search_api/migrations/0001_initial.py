# Generated by Django 3.0 on 2020-01-03 02:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Provider',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('uid', models.CharField(max_length=120)),
                ('name', models.CharField(max_length=120)),
                ('nick_name', models.CharField(max_length=120)),
            ],
        ),
    ]
