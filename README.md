# 🌳 Binary Search Tree (BST) with Traversal Algorithms 🌳

This repository contains an implementation of a Binary Search Tree (BST) with basic operations like `insert`, `lookup`, and `remove`, along with traversal algorithms: **Breadth-First Search (BFS)** and **Depth-First Search (DFS)**. The DFS traversals include **In-Order**, **Pre-Order**, and **Post-Order** methods.

## 🌲 What is a Binary Search Tree (BST)?

A Binary Search Tree is a binary tree with the following properties:
- Each node has a maximum of two children.
- 🌿 Left children contain values smaller than the node's value.
- 🌿 Right children contain values greater than the node's value.

This structure allows for efficient data retrieval with an average time complexity of **O(log n)** for balanced trees.

## 🔍 Traversal Algorithms

Traversal algorithms allow us to visit each node in a BST in a specific order. This repository includes both BFS and DFS traversal algorithms, with three variations of DFS.

### 1️⃣ Breadth-First Search (BFS) 🌐

In **BFS**, we traverse each level of the tree from the root node, moving from left to right across each level before moving down to the next level.

The **BFS** traversal would yield: `9, 4, 20, 1, 6, 15, 170`

### 2️⃣ Depth-First Search (DFS) 🌳

In **DFS**, we explore as far down one branch of the tree as possible before backtracking. DFS has three variations based on the order of visiting nodes:

#### 📝 DFS - In-Order Traversal

In **In-Order Traversal**, we:
1. Traverse the left subtree.
2. Visit the current node.
3. Traverse the right subtree.

This traversal method outputs values in **ascending order** for a BST.

**Example**:
For the same tree above, the **In-Order** traversal yields: `1, 4, 6, 9, 15, 20, 170`

#### 📝 DFS - Pre-Order Traversal

In **Pre-Order Traversal**, we:
1. Visit the current node.
2. Traverse the left subtree.
3. Traverse the right subtree.

This method is useful for capturing the **structure** of the tree, as we visit each node before its children.

**Example**:
For the same tree above, the **Pre-Order** traversal yields: `9, 4, 1, 6, 20, 15, 170`

#### 📝 DFS - Post-Order Traversal

In **Post-Order Traversal**, we:
1. Traverse the left subtree.
2. Traverse the right subtree.
3. Visit the current node.

This method is useful for operations where we need to process child nodes before the parent, such as deleting nodes.

**Example**:
For the same tree above, the **Post-Order** traversal yields: `1, 6, 4, 15, 170, 20, 9`

---

Happy Coding! ✨🌟
