import math

# Given values
diameter = 12
height = 9

# Radius
radius = diameter / 2

# Surface area
surface_area = 2 * math.pi * radius * (radius + height)

print("Surface Area:", round(surface_area, 2), "cm²")