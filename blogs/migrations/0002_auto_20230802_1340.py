# Generated by Django 3.2 on 2023-08-02 09:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blogs',
            name='context',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='blogs',
            name='title',
            field=models.CharField(max_length=350, null=True),
        ),
    ]