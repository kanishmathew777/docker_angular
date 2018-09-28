import json
import os, shutil
from django.core.management import BaseCommand
from django.contrib.auth.models import User

user_file_path = 'users/management/resources/users.json'


class Command(BaseCommand):
    help = 'seed users'
    print(os.getcwd())
    def handle(self, *args, **options):
        self.seed_users()

    def seed_users(self):
        with open(user_file_path) as fp:
            users_list = json.load(fp)

        for user_data in users_list:
            username = user_data['username']
            password = user_data['password']

            user, created = User.objects.get_or_create(username=username)
            user.set_password(password)
            user.email = username

            user.save()
            self.stdout.write(self.style.WARNING('added user {}'.format(username)))

        self.stdout.write(self.style.SUCCESS('\nSuccessfully added users'))