#TODO redo this one https://leetcode.com/problems/generate-parentheses/submissions/
#some solutions man, some guy figured out that the combination using i and n-i would be exhaustive, how the fuck did he do that?
class Solution(object):
    def generateParenthesis(self, n):
        if n == 0:
            return ""
        if n == 1:
            return ["()"]

        table = []
        table.append(["()"])

        for i in range(1,n):
            entry = set()


            table.append(entry)

        return list(table[n-1])


sol = Solution()
print(sol.generateParenthesis(3))
