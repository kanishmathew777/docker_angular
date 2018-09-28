"""
There are N number of people stranded at a location, and have 2 boats available to rescue them. Each boat has different capacity and rescue time (round trip) as given below. You are required to find the minimum time required to rescue them all, with N as input
Boat A: Capacity 15, Rescue time: 10 min
Boat B: Capacity 30, Rescue time: 25 min

Input: 30   Output: 20 mins (Boat A 2 times)
Input: 60   Output: 25 mins (Boat B 1 Time and Boat A 2 times)

"""

N = 90
no_of_30_boats = 0
no_of_15_boats = 0

no_of_pairs = int(N / 60)
no_left = N % 60

if N < 60:
    no_left = N
if no_left:
    if no_left <= 15:
        no_of_15_boats = 1
    elif no_left <= 30:
        no_of_15_boats = 2
    elif 30 < no_left <= 60:
        no_of_15_boats = 2
        no_of_30_boats = 1


print(no_of_15_boats + no_of_pairs*2, no_of_30_boats + no_of_pairs)