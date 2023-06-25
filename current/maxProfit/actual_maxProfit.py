#really?????????????????????
class Solution:
    def maxProfit(self, prices: list[int], fee: int) -> int:
        buy = float('-inf')
        sell = 0

        for price in prices:
            buy = max(buy, sell - price)
            sell = max(sell, buy + price - fee)

        return sell

sol = Solution()
# l = [1,3,2,8,4,9]
# l = [1,5,4,8,4,9]
# l = [5,4,3,2,1]
# l = [1,1,1,1,1,1,1]
# l = [1,2,3,4,5,6]
# l = [0]
# fee = 2
l = [4,5,2,4,3,3,1,2,5,4]
fee = 2
ret = sol.maxProfit(l,fee)
print(f"profit = {ret}")
