#fucking hell https://leetcode.com/problems/jump-game-ii/
class Solution(object):
    def jump(self, nums):
        memo = {}
        for i in range(1,len(nums)):
            for j in 

        print(memo)

sol = Solution()
# nums = [3,2,1]
# print(sol.jump(nums))
# nums = [3,4,3,2,5,4,3]
# print(sol.jump(nums))
# nums = [2,3,1,1,4]
# print(sol.jump(nums))
# nums = [1,2,1,1,1]
# print(sol.jump(nums))
# nums = [5,9,3,2,1,0,2,3,3,1,0,0]
# print(sol.jump(nums))
nums = [10,9,8,7,6,5,4,3,2,1,1,0]
print(sol.jump(nums))
