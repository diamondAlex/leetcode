#https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

from collections import deque 

class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> list[int]:

        search = deque()
        search.append([root,None])

        graph = deque()

        while len(search) != 0:
            current = search.popleft()
            if current[1]:
                graph.append([current[0],current[1],0])
            if current[0].left:
                graph.append([current[0],current[0].left,0])
            if current[0].right:
                graph.append([current[0],current[0].right,0])

        while len(graph) != 0:
            current = graph.popleft()


        return list()

sol = Solution()
# node1 = TreeNode(3)
# node2 = TreeNode(5)
# node3 = TreeNode(1)
# node4 = TreeNode(6)
# node5 = TreeNode(2)
# node6 = TreeNode(0)
# node7 = TreeNode(8)
# node8 = TreeNode(7)
# node9 = TreeNode(4)

# node1.left = node2
# node1.right = node3
# node2.left = node4
# node2.right = node5
# node3.left = node6
# node3.right = node7
# node5.left = node8
# node5.right = node9

# root = node1
# target = 5
# k = 2

node1 = TreeNode(0)
node2 = TreeNode(1)
node3 = TreeNode(3)
node4 = TreeNode(2)

node1.left = node2
node2.left = node3
node2.right = node4

root = node1
target = 2
k = 1

ret = sol.distanceK(root, node2, k)
print(ret)

