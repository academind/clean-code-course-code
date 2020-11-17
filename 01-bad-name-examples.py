from datetime import datetime


class Entity:
    def __init__(self, title, description, ymdhm):
        self.title = title
        self.description = description
        self.ymdhm = ymdhm


def output(item):
    print('Title: ' + item.title)
    print('Description: ' + item.description)
    print('Published: ' + item.ymdhm)


summary = 'Clean Code Is Great!'
desc = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
new_date = datetime.now()
publish = new_date.strftime('%Y-%m-%d %H:%M')

item = Entity(summary, desc, publish)

output(item)
