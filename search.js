const BinaryTree = require('./BinarySearchTree');
const Queue = require('./Queue');
//1.  a. 11 -> 5 -> 6 -> 8
//    b. 11 -> 15 -> 17 -> not found

//3.
/* 
Imagine you are looking for a book in a library with a Dewey Decimal index. 
How would you go about it? Can you express this process as a search algorithm? 
Binary Search

function findBook(dewey, bookValue, start, end){
  if (start > end){
    return 'Book not found'
  }
  const middle = Math.floor((start + end) / 2);
  
  if (bookValue = middle){
    return bookValue
  }
  else if (bookValue > middle){
    return findBook(dewey, bookValue, middle+1, end)Bi
  }
  else if (bookValue < middle){
    return findBook(dewey, bookValue, start, middle - 1)
  }
}
Implement your algorithm to find a book whose Dewey and book title is provided.
// */

// 1) Given a binary search tree whose in-order and pre-order traversals are 
// respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90. 
// What would be its postorder traversal?   
// in-order   14 15 19 25 27 35 79 89 90 91
// pre-order  35 25 15 14 19 27 89 79 91 90.
// post-order 14 19 15 27 25 79 90 91 89 35.
//             35                    
//          25      89                
//    15     27    79     91
//  14  19             90            
// 2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. 
// What is its pre-order traversal?   
// post-order:  5 7 6 9 11 10 8.
// pre-order:  8 6 5 7 10 9 11
          //      8
          //   6     10
          // 5  7   9   11
                                        

const dataArr = [25, 15, 50, 10, 24, 35, 70, 4, 12, 18, 31, 44, 66, 90, 22];
function main(arr){
  const bt = new BST();
  arr.forEach(el => bt.insert(el, el));
  postOrder(bt);
}
function inOrder(tree){
  if(tree === null){ 
    return;
  }
  if(tree.left){
    inOrder(tree.left);
  }
  console.log(tree.key);
  if(tree.right){
    inOrder(tree.right);
  }
}
function preOrder(tree){
  console.log(tree.key);
  if(tree=== null){
    return;
  }
  if(tree.left){
    preOrder(tree.left);
  }
  if(tree.right){
    preOrder(tree.right);
  }
}
function postOrder(tree){
  if(tree=== null){
    return;
  }
  if(tree.left){
    postOrder(tree.left);
  }
  if(tree.right){
    postOrder(tree.right);
  }
  console.log(tree.key);
}
const startrek = [
  {10:'picard'} ,
  {11:'data'},
  {14:'crush'},
  {12:'selar'},
  {5: 'riker'},
  {6:'laforge'},
  {4:'worf'},
  {3:'security officer'}];

function queue(){
  // const bst = new BST();
  // arr.forEach(obj =>{
  //   for(let key in obj){
  //     bst.insert(parseInt(key), obj[key]);
  //   }});
  const BST = new BinaryTree();
  BST.insert(5, 'Captain Picard');
  BST.insert(3, 'Commander Riker');
  BST.insert(2, 'Lt. Cmdr. Worf');
  BST.insert(4, 'Lt. Cmdr. LaForge');
  BST.insert(1, 'Lieutenant security-officer');
  BST.insert(6, 'Commander Data');
  BST.insert(8, 'Lt. Cmdr. Crusher');
  BST.insert(7, 'Lieutenant Selar');
  console.log(BST.bfs());
  

  
  // arr.forEach(el => queue.enqueue(el));
  // console.log(queue);
}

queue();