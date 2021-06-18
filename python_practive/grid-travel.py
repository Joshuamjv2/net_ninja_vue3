def grid_traveler(a,b, memo={}):
    key = str(a) + ',' + str(b)
    if key in memo:
        return memo[key]
    if a == 1 and  b == 1:
        return 1
    elif a==0 or b == 0:
        return 0
    memo[key] = grid_traveler(a - 1, b) + grid_traveler(a, b-1)
    # print(key)
    # print(memo[key])
    return memo[key]

k = grid_traveler(3,2)
print(k)