def travel(a, b, memo = {}):
    key  = str(a) + ',' + str(b)
    if key in memo:
        return memo[key]
    elif a == 1 and b == 1:
        return 1
    elif b == 0 or a == 0:
        return 0
    memo[key] = travel(a-1, b) + travel(a, b-1)
    return memo[key]

k = travel(3,3)
print(k)

