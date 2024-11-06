// Binary Search Tree Implementation
// This file defines a simple Binary Search Tree (BST) with basic operations: insert, lookup, and remove.
// In a BST, each node has a maximum of two children, with left children smaller than the node's value and right children greater.
// This structure allows efficient data retrieval with a time complexity of O(log n) in balanced trees.

class Node {
  // Node class represents each individual node in the Binary Search Tree.
  // Each node holds a value, and pointers to left and right children (both initially set to null).
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    // BinarySearchTree initializes with a root node set to null.
    this.root = null;
  }

  // Insert Method:
  // Adds a new node with the specified value to the BST.
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      // If the tree is empty, set the new node as the root.
      this.root = newNode;
    } else {
      // Otherwise, start at the root and find the correct position for the new node.
      let currentNode = this.root;
      while (true) {
        if (currentNode.value > value) {
          // Traverse to the left subtree if the value is smaller than the current node's value.
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          // Traverse to the right subtree if the value is greater than or equal to the current node's value.
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  // Lookup Method:
  // Searches for a node with the specified value in the BST.
  // Returns the node if found; otherwise, returns false.
  lookup(value) {
    if (!this.root) {
      return false;
    }

    let currentNode = this.root;
    while (currentNode) {
      if (currentNode.value > value) {
        currentNode = currentNode.left; // Move left if the value is smaller.
      } else if (currentNode.value < value) {
        currentNode = currentNode.right; // Move right if the value is greater.
      } else {
        return currentNode; // Value found.
      }
    }
    return false; // Value not found in the tree.
  }

  // Remove Method:
  // Deletes a node with the specified value from the BST.
  // Returns true if the node was successfully removed; otherwise, returns null.
  remove(value) {
    if (!this.root) {
      return null;
    }

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        // Node to be removed found.

        // Case 1: Node has no right child.
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        }
        // Case 2: Node has a right child with no left child.
        else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        }
        // Case 3: Node has both left and right children.
        else {
          // Find the leftmost node in the right subtree (in-order successor).
          let leftMost = currentNode.right.left;
          let leftMostParent = currentNode.right;
          while (leftMost.left !== null) {
            leftMostParent = leftMost;
            leftMost = leftMost.left;
          }

          // Replace current node with the leftmost node.
          leftMostParent.left = leftMost.right;
          leftMost.left = currentNode.left;
          leftMost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftMost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftMost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftMost;
            }
          }
        }
        return true; // Node successfully removed.
      }
    }
  }

  breathFirstSearch() {
    // Breath First Search (BFS):
    // BFS traverses each level of the tree from the root node, visiting nodes in a left-to-right order.
    // Head  ==> Left ==> Right
    let currentNode = this.root;
    let list = [];
    let queue = [];

    queue.push(currentNode);
    while (queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);

      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  // DFS explores as far as possible down one branch before backing up to the previous branch. There are three methods used under this algorithm.
  //1. In-Order Traversal
  //2. Pre-Order Traversal
  //3. Post-Order Traversal

  DFSInOrder() {
    return this.traverseInOrder(this.root, []);
  }

  DFSPreOrder() {
    return this.traversePreOrder(this.root, []);
  }

  DFSPostOrder() {
    return this.traversePostOrder(this.root, []);
  }

  traverseInOrder(node, list) {
    //In-Order Traverse:- Recursively visit left subtree, add current node's value, then right subtree.
    // Left ==> Right ==> Value(Head Node).
    if (node.left) {
      this.traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
      this.traverseInOrder(node.right, list);
    }
    return list;
  }

  traversePreOrder(node, list) {
    //Pre-Order Traversing:- TAdd current node's value before recursively visiting left, then right subtree.
    // Head ==> Every Left ==> Right

    list.push(node.value); // Here we add the the Head to the list.

    if (node.left) {
      this.traversePreOrder(node.left, list);
    }

    if (node.right) {
      this.traversePreOrder(node.right, list);
    }
    return list;
  }

  traversePostOrder(node, list) {
    //Post-Order:-  Recursively visit left and right subtree before adding current node's value.
    // Left ==> Right ==> Head

    if (node.left) {
      this.traversePostOrder(node.left, list);
    }
    if (node.right) {
      this.traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
  }
}

// Utility Function for Traversing and Displaying the Tree Structure:
// traverse function is used to convert the BST into an object format for easier visualization.
function traverse(node) {
  const tree = { value: node.value };

  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);

  return tree;
}

// Example: To visualize the BST structure, uncomment below:

//     9
//  4     20
// 1  6  15  170
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
tree.breathFirstSearch();
//Response for Breath First Search.
//     9
//  4     20
//1  6  15  170
tree.DFSInOrder(); // Starts from 1 ==> 4 ==> 6 ==> 9 ==> 15 ==> 20 ==> 170
tree.DFSPreOrder(); //Starts from 9 ==> 4 ==> 1 ==> 6 ==> 20 ==> 15 ==> 170
tree.DFSPostOrder(); //Starts from 1 ==> 6 ==> 4 ==> 15 ==> 170 ==> 20 ==> 9
// console.log(JSON.stringify(traverse(tree.root)));
