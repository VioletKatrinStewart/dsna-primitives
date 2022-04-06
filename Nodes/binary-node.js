class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    //if value is already in the tree there is nothing to add
    if (node.value === this.value) {
      return;
    }
    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}

class PersonTreeNode {
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

  findPerson(name) {
    if (this.value === name) return this.value;
    //if name matches the value in this node, return this value
    else if (this.left)
      return this.left.findPerson(name); //else check left tree for name
    else if (this.right)
      return this.right.findPerson(name); //else check right tree for name
    else return null; //if name cannot be found, return null
  }
}
const tree = new PersonTreeNode({ name: 'alchemy' });
const human0 = new PersonTreeNode({ name: 'human 0' });
const human1 = new PersonTreeNode({ name: 'human 1' });
const human2 = new PersonTreeNode({ name: 'human 2' });
const human3 = new PersonTreeNode({ name: 'human 3' });

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');
// B will be the root of the tree:
B.add(A);
B.add(D);
B.add(C);

tree.add(human0);
tree.add(human1);
tree.add(human2);
tree.add(human3);
console.log(tree.findPerson('human 4'));
console.log(tree.findPerson('human 3'));

console.log(BinaryTreeNode);
