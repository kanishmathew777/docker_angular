"""
A rain water harvesting system is built with blocks of 1x1x1 unit dimensions.
Water gets collected between blocks. Write a program which collects the number of blocks
in each section (total 7 sections) and calculate the volume of water collected.
The diagram below represents the rain harvesting system for an input (3,0,1,4,0,2,1) and
shaded area represents water.


"""

# inputs = [3, 0, 1, 4, 0, 2, 1]
inputs = [3, 0, 0, 2, 0, 4]
rows = max(inputs)
columns = len(inputs)

Matrix = [[0 for x in range(columns)] for y in range(rows)]

for i in range(columns):
    for j in range(rows-1, -1, -1):
        if j+1 <= inputs[i]:
            Matrix[rows-1-j][i] = 1
        else:
            Matrix[rows-1-j][i] = 0


for i in range(rows):
    for j in range(columns):

        print(Matrix[i][j], end=" ")
    print("\n")

Sum_total = 0

for i in range(rows):
    for j in range(columns):
        total_water = 0
        if Matrix[i][j]:
            count = j+1
            while count < columns:
                if Matrix[i][count]:
                    Sum_total += total_water
                    break
                total_water += 1
                count += 1

print(Sum_total)