# https://leetcode.com/problems/longest-arithmetic-subsequence/submissions/
class Solution:
    def longestArithSeqLength(self, nums: list[int]) -> int:
        dp = [{}]
        
        maxlen = 0

        for pr in range(1,len(nums)):
            dp.append({})
            for pl in range(0,pr):
                diff = nums[pr] - nums[pl]
                if diff in dp[pl]:
                    total = dp[pl][diff] + 1
                    maxlen = max(total,maxlen)
                    dp[pr][diff] = total
                else:
                    maxlen = max(2,maxlen)
                    dp[pr][diff] = 2

        return maxlen

        
        


sol = Solution()
nums = [83,20,17,43,52,78,68,45]
ret = sol.longestArithSeqLength(nums)
print(ret)

