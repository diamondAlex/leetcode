from typing import Optional
# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        b = [True]
        if root is not None:
            x = self.checkHeight(root,b)
            print(x)
        return b[0]

    def checkHeight(self,node,b):
        lh = 1
        lr = 1
        if node.left is not None:
            lh += self.checkHeight(node.left,b)
        if node.right is not None:
            lr += self.checkHeight(node.right,b)
        print(f'node = {node.val}, lh= {lh}, lr = {lr}')
        if abs(lh - lr) > 1:
            b[0] = False
        return max(lh,lr)




node6 = TreeNode(12,None,None)
node4 = TreeNode(15,None,None)
node5 = TreeNode(7,None,None)
node2 = TreeNode(9,None,None)
node3 = TreeNode(20,node4,node5)
node1 = TreeNode(3,node2,node3)

sol = Solution()
print(sol.isBalanced(node1))
