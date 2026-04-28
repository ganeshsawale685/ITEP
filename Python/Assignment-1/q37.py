import math


surface_area = 149   
height = 6          

# Using formula: S = 2πr(r + h)
# Solve quadratic: 2πr² + 2πhr - S = 0

a = 2 * math.pi
b = 2 * math.pi * height
c = -surface_area

D = b**2 - 4*a*c

r = (-b + math.sqrt(D)) / (2*a)

# Diameter
diameter = 2 * r

print("Radius:", round(r, 2), "cm")
print("Diameter:", round(diameter, 2), "cm")