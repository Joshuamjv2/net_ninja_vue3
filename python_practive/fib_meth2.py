# memoization - memo or reminder
def fib(n, memo = {}):
    # memo = {1:'One'}
    if n in memo:
        return memo[n]
    if n <= 2:
        return 1
    memo[n] = fib(n-1, memo) + fib(n-2, memo)
    return memo[n]

print(fib(6))

