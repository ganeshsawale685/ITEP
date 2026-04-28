import math

# Given values
volume = 1287
radius = 10

# Step 1: Find height using V = πr²h
height = volume / (math.pi * radius**2)

# Step 2: Find surface area using S = 2πr(r + h)
surface_area = 2 * math.pi * radius * (radius + height)

print("Height:", round(height, 2))
print("Surface Area:", round(surface_area, 2))