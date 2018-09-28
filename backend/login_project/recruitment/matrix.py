"""
Treasure hunt game:
Given a treasure board of n*m dimensions. Each position in this board is a positive integer denoting
the amount of treasure. The player can start at any row in first column.
He can move only right, right up, right down from the current position.
Find the row from which he need to start the hunt to collect maximum treasures.
Also print the total treasure collected.
Input 	     Output			    Start
1, 3, 3
2, 1, 4	       12				(1, 0)
0, 6, 4

Input  	      Output			Start
1, 3, 1, 5
2, 2, 4, 1	   16				(2, 0)
5, 0, 2, 3
0, 6, 1, 2

"""

rows = 2
columns = 2

# A = [[1, 5, 7, 9], [3, 4, 8, 2], [2, 10, 3, 5]] # sample input -> (1, 0) #output -> [3, 10, 8, 9]
# A = [[2, 4, 6], [5, 4, 7]] # sample input - > (1, 0) #output -> [5, 4, 7]
# A = [[9, 2], [7, 4]] # sample input - > (0, 0) #output -> [9, 4]

A = [[9, 2], [7, 4]]


for i in range(0, rows):
    for j in range(0, columns):
        print(A[i][j], end=" ")
    print("\n")
        # print(A[i][j])

start_pos_i = 0
start_pos_j = 0

sum = [A[start_pos_i][start_pos_j]]

pos = start_pos_i

for j in range(start_pos_j+1, columns):
    if pos == 0:
        if A[pos + 1][j] >= A[pos][j]:
            largest, pos = A[pos + 1][j], pos + 1
        else:
            largest, pos = A[pos][j], pos

    elif pos < rows-1:
        if (A[pos - 1][j] >= A[pos][j]) and \
                (A[pos - 1][j] >= A[pos + 1][j]):

            largest, pos = A[pos - 1][j], pos-1

        elif (A[pos][j] >= A[pos - 1][j]) and \
                (A[pos][j] >= A[pos + 1][j]):

            largest, pos = A[pos][j], pos

        else:

            largest, pos = A[pos + 1][j], pos + 1

    elif pos == rows-1:
        if A[pos - 1][j] >= A[pos][j]:
            largest, pos = A[pos - 1][j], pos - 1
        else:
            largest, pos = A[pos][j], pos

    print("largest:", largest, pos)
    sum.append(largest)
    # print(A[start_pos_i - 1][1])
    # print(A[start_pos_i][1])
    # print(A[start_pos_i + 1][1])

print(sum)


