class point:
    def __init__(self, coordX, coordY):
        self.coordX = coordX
        self.coordY = coordY


class Rectangle:
    def __init__(self, starting_point, width, height):
        self.starting_point = starting_point
        self.width = width
        self.height = height

    def area(self):
        return self.width * self.height

    def end_points(self):
        top_right = self.starting_point.coordX + self.broad
        bottom_left = self.starting_point.coordY + self.high
        print('Starting Point (X)): ' + str(self.starting_point.coordX))
        print('Starting Point (Y)): ' + str(self.starting_point.coordY))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


def coordinates():
    main_point = Point(50, 100)
    rect = Rectangle(main_point, 90, 10)

    return rect


my_rect = coordinates()

print(my_rect.area())
my_rect.end_points()
