# frozen_string_literal: true

class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val = 0, left = nil, right = nil)
    @val = val
    @left = left
    @right = right
  end
end

# @param {TreeNode} root
# @return {Integer[]}
def inorder_traversal(root)
  return [] if root.nil?

  order = [root.val]
  order = inorder_traversal(root.left) + order unless root.left.nil?
  order += inorder_traversal(root.right) unless root.right.nil?
  order
end


node = TreeNode.new
node2 = TreeNode.new
node3 = TreeNode.new
node4 = TreeNode.new
node.val = 1
node.right = node2
node.left = node4
node4.val = 9
node2.val = 2
node2.left = node3
node3.val = 3

puts node3.left

order = inorder_traversal(node)
puts order
