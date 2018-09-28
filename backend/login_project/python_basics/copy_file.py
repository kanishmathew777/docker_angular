# from copy import deepcopy
#
# x = ['3', '4', '5']
#
# s = x
#
# x = 5
#
# help(s)
# print(dir(s))
# deep = deepcopy(x)
#
# x = ['7', '8', '9']
#
# print(s)
#
# print(deep)



class A(object):
    print("A")
    def go(self):
        print("go A go!")


class B(object):
    print("B")
    def go(self):
        print("go B go!")

class C(A, B):
    print('C')
    # def go(self):
    #     print("go C go!")


a = A()
b = B()
c = C()
# a.go()
#
# b.go()

c.go()