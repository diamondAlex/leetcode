class Solution:
    def maxProfit(self, prices: list[int], fee: int) -> int:
        if len(prices) == 1:
            return 0
        p_start = 0
        p_end = 0
        p_find = 1
        total = []

        self.start(p_start, p_end, p_find, fee, prices, total)
        return sum(total)

    def start(self, p_start, p_end, p_find, fee, prices, total):
        if p_find < len(prices):
            #profit
            if prices[p_find] - prices[p_start] - fee > 0:
                #print("start -> profit")
                p_end = p_find
                p_find = p_find + 1
                self.profit(p_start, p_end, p_find, fee, prices, total)
            #larger + no profit
            elif prices[p_find] - prices[p_start] >= 0:
                #print("start -> larger no profit")
                p_find = p_find + 1
                self.start(p_start, p_end, p_find, fee, prices, total)
            else:
                #print("start -> smaller")
                p_start = p_find
                p_find = p_find + 1
                p_end = p_start
                self.start(p_start, p_end, p_find, fee, prices, total)

    def profit(self, p_start, p_end, p_find, fee, prices, total):
        if p_find < len(prices):
            #smaller would be profit
            if prices[p_find] - prices[p_end] + fee < 0:
                #print("profit -> smaller + profit")
                total.append(prices[p_end] - prices[p_start] - fee)
                p_start = p_find
                p_end = p_find
                p_find = p_find + 1
                self.start(p_start, p_end, p_find, fee, prices, total)
            #smaller, no profit
            elif prices[p_find] - prices[p_end] < 0:
                #print("profit -> smaller + no profit ")
                p_find = p_find + 1
                self.profit(p_start, p_end, p_find, fee, prices, total)
            #larger
            else:
                #print("profit -> larger")
                p_end = p_find
                p_find = p_find + 1
                self.profit(p_start, p_end, p_find, fee, prices, total)
        else:
            profit = prices[p_end] - prices[p_start] - fee
            total.append(profit) 



        

sol = Solution()
# l = [1,3,2,8,4,9]
# l = [1,5,4,8,4,9]
# l = [5,4,3,2,1]
# l = [1,1,1,1,1,1,1]
# l = [1,2,3,4,5,6]
# l = [0]
# fee = 2
l = [4,5,2,4,3,3,1,2,5,4]
fee = 1
ret = sol.maxProfit(l,fee)
print(f"profit = {ret}")
