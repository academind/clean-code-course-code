# (c) Maximilian Schwarzmüller / Academind GmbH

# *********
# Imports
# *********
from os import path, makedirs
from pathlib import Path

# *********
# Main
# *********
# A class which allows us to create DiskStorage instances


class DiskStorage:
    def __init__(self, directory_name):
        self.storage_directory = directory_name

    def get_directory_path(self):
        return Path(self.storage_directory)

    # This must be called before a file is inserted
    def create_directory(self):
        if (not path.exists(self.get_directory_path())):
            makedirs(self.storage_directory)

    # Warning: Directory must exist in advance
    def insert_file(self, file_name, content):
        file = open(self.get_directory_path() / file_name, 'w')
        file.write(content)
        file.close()
        # Todo: Add proper error handling


log_storage = DiskStorage('logs')

log_storage.insert_file('test.txt', 'Test')
