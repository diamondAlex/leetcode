class Solution(object):
    def destCity(self, paths):
        cities = {}
        for path in paths:
            if path[0] in cities:
                cities[path[0]] += 1
            else:
                cities[path[0]] = 1
            if not path[1] in cities:
                cities[path[1]] = 0
        for city in cities:
            if cities[city] == 0:
                return city


# paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
paths = [["B","C"],["D","B"],["C","A"]]
sol = Solution()
print(sol.destCity(paths))
