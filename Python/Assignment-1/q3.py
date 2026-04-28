# 3. How many tiles whose length and breadth are 13 cm and 7 cm respectively are needed to cover a rectangular region whose length and breadth are 520 cm and 140 cm? 
length_region,breadth_region = 520,140
tile_length,tile_breadth = 13,7
covered_region = length_region*breadth_region

area_of_one_tile = tile_length*tile_breadth

no_of_tile = covered_region/area_of_one_tile
print("Area of region : ",covered_region)
print("Area of one Tile : ",area_of_one_tile)
print("No of Tile : ",no_of_tile)
