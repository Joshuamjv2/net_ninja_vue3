import sys

n = 10

data = []
k = [{'name', 'age', 'village', 'city'}, {'name', 'age', 'village', 'city', 'all', 2, 4,55,834,54,99,12,111}]
print(sys.getsizeof(k[0]))
for i in range(n):
    a = len(data)
    b = sys.getsizeof(data)
    # print('Length: {0: 3d}, Size in bytes: {1:4d}'.format(a,b))
    data.append(i)

print(data)


# print(f'Length: {a}, Size in bytes: {b}')