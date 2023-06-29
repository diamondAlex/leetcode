#https://leetcode.com/problems/shortest-path-to-get-all-keys/submissions/
#todo lots of work for this one, very difficult to understand the Solution and why the solution actually is optimal
import queue
from sys import api_version

class Solution:
    def shortestPathAllKeys(self, grid: list[str]) -> int:
        paths = queue.Queue()
        paths.put([0,0,0])
        total_keys = self.countKeys(grid)
        state = 0
        keys = []

        visited = []
        for i in range(0,len(grid)):
            visited.append([])
            for j in range(0,len(grid[0])):
                visited[i].append([2147483647,0])
        visited[0][0] = 0

        visited_w_key = []
        for i in range(0,len(grid)):
            visited_w_key.append([])
            for j in range(0,len(grid[0])):
                visited_w_key[i].append([2147483647,1])
        visited_w_key[0][0] = 0

        while paths.qsize() != 0:
            current = paths.get()
            #gets key
            if grid[current[0]][current[1]].islower():
                keys.append(grid[current[0]][current[1]])
                state = 1
                if len(keys) == total_keys:
                    return current[2]

            
            if state == 0:
                self.findPaths(current, paths, grid, keys, visited,state)
            if state == 1:
                self.findPaths(current, paths, grid, keys, visited_w_key,state)

        return 1 

    def countKeys(self, grid):
        count = 0
        for i in grid:
            for j in i:
                if j.islower():
                    count = count + 1
        return count

    def findPaths(self,current, paths, grid, keys, visited, state):
        x = current[0]
        y = current[1]
        length = current[2]
        xmax = len(grid)
        ymax = len(grid[0])
        targets = [[-1,0,0],[1,0,0],[0,-1,0],[0,1,0]]

        for target in targets:
            target = [x + target[0],y + target[1], -1]
            if not (target[0] >= 0 and target[0] < xmax):
                continue
            if not (target[1] >= 0 and target[1] < ymax):
                continue
            pathVal = grid[target[0]][target[1]]
            if pathVal == "#":
                continue
            if pathVal.isupper():
                if not(pathVal.lower() in keys):
                    continue
                else:
                    pathVal = '.'
                    state = 0
            target[2] = visited[target[0]][target[1]]
            if (target[2] == 0 or target[2] <= current[2]):
                continue
            #keeps not of shortest path at that location
            visited[target[0]][target[1]] = length + 1  
            #inc the path length
            target[2] = length+1
            paths.put(target)





grid = ["@.a..","###.#","b.A.B"]
sol = Solution()
ret = sol.shortestPathAllKeys(grid)
print(ret)
