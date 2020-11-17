from datetime import datetime


class BlogPost:
    def __init__(self, title, description, date_published):
        self.title = title
        self.description = description
        self.date_published = date_published


def print_blog_post(blog_post):
    print('Title: ' + blog_post.title)
    print('Description: ' + blog_post.description)
    print('Published: ' + blog_post.ymdhm)


title = 'Clean Code Is Great!'
description = 'Actually, writing Clean Code can be pretty fun. You\'ll see!'
now = datetime.now()
formatted_date = now.strftime('%Y-%m-%d %H:%M')

blog_post = BlogPost(title, description, formatted_date)

print_blog_post(blog_post)
