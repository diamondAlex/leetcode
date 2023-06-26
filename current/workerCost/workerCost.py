import heapq
import math

class Solution:
    def totalCost(self, costs: list[int], k: int, candidates: int) -> int:
        left_head = candidates - 1
        right_head = len(costs) - candidates

        if candidates * 2 > len(costs):
            left_head = math.ceil(len(costs)/2)
            right_head = math.ceil(len(costs)/2) + 1

        total = 0

        left_list = costs[0:left_head + 1]
        right_list = costs[right_head:len(costs)]

        heapq.heapify(left_list)
        heapq.heapify(right_list)

        while k > 0:
            if len(right_list) == 0:
                total = total + heapq.heappop(left_list)
            elif len(left_list) == 0:
                total = total + heapq.heappop(right_list)

            elif left_list[0] <= right_list[0]:
                total = total + heapq.heappop(left_list)
                if(left_head + 1 != right_head):
                    left_head = left_head+1
                    heapq.heappush(left_list,costs[left_head])
            else:
                total = total + heapq.heappop(right_list)
                if(right_head - 1 != left_head):
                    right_head = right_head -1
                    heapq.heappush(right_list,costs[right_head])
            k= k - 1

        return total
        


import values
values = values.val()
costs = values[0]
k = values[1]
candidates = values[2]

# costs = [1,2,4,1]
# k = 3
# candidates = 3
# costs = [17,12,10,2,7,2,11,20,8]
# k = 3
# candidates = 4
# costs = [28,35,21,13,21,72,35,52,74,92,25,65,77,1,73,32,43,68,8,100,84,80,14,88,42,53,98,69,64,40,60,23,99,83,5,21,76,34]
# k = 32
# candidates = 12
# costs = [18,64,12,21,21,78,36,58,88,58,99,26,92,91,53,10,24,25,20,92,73,63,51,65,87,6,17,32,14,42,46,65,43,9,75]
# k=13
# candidates=23

sol = Solution()
ret = sol.totalCost(costs, k ,candidates)
print(ret)
