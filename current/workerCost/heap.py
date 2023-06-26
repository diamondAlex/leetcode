import heapq

# x = [[1,2],[5,6],[3,4]]

x = []

heapq.heapify(x)

if heapq.heappop(x):
    print(1)
else:
    print(0)

# heapq.heapify(x)

# print(x)

# heapq.heappop(x)

# print(x)

# heapq.heappush(x, [7,1])

# print(x)

# heapq.heappush(x, [1,9])
# print(x)
