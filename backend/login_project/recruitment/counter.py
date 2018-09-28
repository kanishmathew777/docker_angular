"""
A flight arrived at an airport at 4:20 AM, and the passengers reach the immigration queue, where the counters open at 4:30 AM. There are 3 counters where the passengers can finish their process. First counter takes 5 mins to complete, 2nd takes 7 mins and the third 10 mins. Counters are filled from leftmost counter first, if that’s free and so on towards the last one.
Write a program to calculate the time at which Nth passenger finish their process and leave the counter. Print the time and the counter that they have done their process

Eg: Input 10
Output: Passenger at position 10 in queue leave from counter 1 at 4:55 PM
Input 74
Output: Passenger at position 74 in queue leave from counter 2 at 7:18 PM

"""

# sample output : 60 -> 140, 3
# sample output : 39 -> 91, 2
# sample output : 17 -> 40, 1


no_of_entry = 74
n = 4

minute = 5


def checknless(n, no_of_entry):
    if n == no_of_entry:
        return True
    else:
        return False


if no_of_entry > 3:
    while n <= no_of_entry:
        if minute % 5 == 0:
            counter = 1
            if checknless(n, no_of_entry):
                break
            n += 1
        if minute % 7 == 0:
            counter = 2
            if checknless(n, no_of_entry):
                break
            n += 1
        if minute % 10 == 0:
            counter = 3
            if checknless(n, no_of_entry):
                break
            n += 1

        minute += 1
    minute += 5
elif no_of_entry == 1:
    counter = 1
elif no_of_entry == 2:
    minute += 2
    counter = 2
elif no_of_entry == 3:
    minute += 5
    counter = 3
print(minute, counter)
