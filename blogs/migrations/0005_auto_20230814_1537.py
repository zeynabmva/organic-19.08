# Generated by Django 3.2 on 2023-08-14 11:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0004_blogs_blog_title'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blogs',
            old_name='context',
            new_name='abstract',
        ),
        migrations.RenameField(
            model_name='blogs',
            old_name='farmer',
            new_name='writer',
        ),
        migrations.RemoveField(
            model_name='blogs',
            name='blog_title',
        ),
        migrations.RemoveField(
            model_name='blogs',
            name='contextthird',
        ),
        migrations.RemoveField(
            model_name='blogs',
            name='title',
        ),
        migrations.RemoveField(
            model_name='blogs',
            name='titlethird',
        ),
        migrations.AlterField(
            model_name='blogs',
            name='titlefirst',
            field=models.CharField(blank=True, max_length=350, null=True),
        ),
        migrations.AlterField(
            model_name='blogs',
            name='titlesecond',
            field=models.CharField(blank=True, max_length=350, null=True),
        ),
    ]
