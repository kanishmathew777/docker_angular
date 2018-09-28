N = 7
M = 21

element = '-'
welcome = "Welcome"
count = 0

A = [[element for j in range(M)] for i in range(N)]

for i in range(N):
    for j in range(M):
        if i == (int(N/2)) and ((M-7) / 2) <= j < ((M-7) / 2) + 7:
            A[i][j] = welcome[count]
            count += 1
        if i != (int(N/2)):
            for pattern in range(i+1):
                column = j
                if i < int(N/2):
                    if j == (int(M/2)-(3*pattern)) or j == (int(M/2)+(3*pattern)):
                        A[i][column-1] = '.'
                        A[i][column] = '|'
                        A[i][column+1] = '.'
                    column += 1
            for pattern in range(N, int(N/2), -1):
                pattern -= int(N/2 + 1)
                column = j
                if i > int(N / 2):
                    if j == (int(M/2)-(3*pattern)) or j == (int(M/2)+(3*pattern)):
                        A[i][column-1] = '.'
                        A[i][column] = '|'
                        A[i][column+1] = '.'
                    column += 1

for i in range(N):
    for j in range(M):
        print(A[i][j], end=" ")

    print("\n")
