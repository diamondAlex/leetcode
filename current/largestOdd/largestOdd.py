#too ez
class Solution(object):
    def largestOddNumber(self, num):
        num_str = str(num)
        for i in range(len(num_str)-1,-1,-1):
            if int(num_str[i])%2 == 1:
                return num_str[0:i+1]

        return ""
        

sol = Solution()
res = sol.largestOddNumber(5266766)
print(res)
