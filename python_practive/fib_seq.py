def fib(n):
    if n<=2:
        return 1
    # print(n)
    return fib(n-1) + fib(n-2)

print(fib(29))
# fib(54) + fib(53)

# 7(
#     6(5(4,3),4(3,2)),
#     5(4(3,2),3(2,1)),
# )

# memo = [0]

# def fib(n,memo):
#     if memo[n] != None:
#         return memo[n]
#     if n<=2:
#         return 1
#     result = fib(n-1) + fib(n-2)
#     memo[n] = result
#     return result