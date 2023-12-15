#include <stdio.h>
#include <limits.h>
struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
};

int check_for_children(struct TreeNode* root, int depth){
    if(!root->left && !root->right){
        return depth; 
    }
    else{
        int left = INT_MAX;
        int right = INT_MAX;
        if(root->left){
            left = check_for_children(root->left, depth+1);
        }
        if(root->right){
            right = check_for_children(root->right, depth+1);
        }
        return left < right? left:right;
    }
}

int minDepth(struct TreeNode* root){
    if(!root){
        return 0;
    }
    return check_for_children(root, 1); 
}

int main(){
    struct TreeNode node;
    node.val = 1;
    
    struct TreeNode node1;
    node1.val = 2;
    node1.left = NULL;
    node1.right = NULL;

    struct TreeNode node2;
    node2.val = 3;
    node2.left = NULL;
    node2.right = NULL;

    node.left = &node1;
    node.right = &node2;

    int ret = minDepth(&node);

    printf("%i ret\n", ret);
}
