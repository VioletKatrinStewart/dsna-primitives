class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //add to left first if left is null, if not check right to see if right is null
    if (!this.left) {
      this.left = node;
    } else if (!this.right) {
      this.right = node;
      // decide whether to deligate to left or right
      //deligate left
    } else if (!(this.left.left && this.left.right)) {
      this.left.add(node);
    } //if left has both then deligate right
    else {
      this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);
