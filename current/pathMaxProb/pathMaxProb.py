# todo this is bottom 5% stuff. Everything is wrong with it, except it works

import heapq

class Solution:
    def maxProbability(self, n: int, edges: list[list[int]], succProb: list[float], start: int, end: int) -> float:
        nodes = []
        for i in range(0,n):
            nodes.append([])
        for i in range(0,len(edges)):
            nodes[edges[i][0]].append([-succProb[i],0,edges[i][1]])
            nodes[edges[i][1]].append([-succProb[i],0,edges[i][0]])

        total = 0
        selected = [[0,1,start]]

        print(selected)
        print()
        while(len(selected) != 0):
            current = heapq.heappop(selected)
            print(selected)
            print(current)
            paths = nodes[current[2]]
            print(paths)
            for path in paths:
                # print(path[1])
                if(path[1] < current[1] * path[0] * -1):
                    path[1] = current[1] * path[0] * -1
                    heapq.heappush(selected, path)
                    if path[2] == end:
                        total = max(total, path[1])
            print(selected)
            print()
        return total


edges = [[0,1],[1,2],[0,2]]
succProb = [0.5,0.5,0.2] 
start = 0
end = 2
n = 3 
# edges = [[0,1],[1,2],[0,2]]
# succProb = [0.5,0.5,0.3] 
# start = 0
# end = 2
# n = 3 
# edges = [[0,1]] 
# succProb = [0.5] 
# start = 0 
# end = 2
# n=5
# edges=[[1,4],[2,4],[0,4],[0,3],[0,2],[2,3]]
# succProb=[0.37,0.17,0.93,0.23,0.39,0.04]
# start = 3
# end = 4

sol = Solution()
res = sol.maxProbability(n,edges,succProb, start, end)
print(res)
