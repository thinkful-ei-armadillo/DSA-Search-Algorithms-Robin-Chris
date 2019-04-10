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
    return findBook(dewey, bookValue, middle+1, end)
  }
  else if (bookValue < middle){
    return findBook(dewey, bookValue, start, middle - 1)
  }
}
Implement your algorithm to find a book whose Dewey and book title is provided.
*/