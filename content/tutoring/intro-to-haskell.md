---
title: "Introduction to Haskell"
date: "2026-03-07"
layout: post
categories: worksheets
image:
  filename: haskell_logo.png
---

## INTRODUCTION TO Haskell

This document works you through all the Haskell code used in lectures and tutorials, explaining how to read and understand the code provided.

Before we jump into the code from lectures, let's run through a simple example. Let's try to write a code to calculate the sum of three integers. Haskell functions are like functions in math, so we can start there, how would you write this function in math, image .

Here, we specify the variables within parentheses, in contrast Haskell identifies the separation of variables with spaces. So we can write the same function using Haskell as `f x y z = x + y + z` .

Additionally, we need to specify the type signature of the function. In Haskell we use `::` to do this. For example, if we have `function:: Int -> Bool` this tells the compiler that there is a function called function of type `Int -> Bool` . All Haskell functions take an arbitrary number of inputs and return a single output. This is denoted in the type signature. Each input and output is separated with `->` sign. For example, `function:: Int -> Bool` says that “function” is a function that takes an `Int` as input and returns a `Bool` as output. With this let's go back to write the function `f` . We know that `f` takes in three `Int` s and gives an `Int` as output, hence we can write the type signature of the function as `f:: Int -> Int -> Int -> Int` where the first three `Int` denote the inputs and the last one denotes the output. Putting it all together, we get :

```haskell
f:: Int -> Int -> Int -> Int
f x y z = x + y + z
```

We wrote our first Haskell function!!!

Let's see what would happen if we run `f(3,4,5)` , in this case the variable `x` takes the value 3, `y` takes the value 4 and `z` takes the value 5. Using this Haskell will evaluate `x+y+z` which would be `3+4+5` and return `12` .

For this course we only require an understanding of the syntax to be able to understand and interpret code, from here on I explaine code that was provided both in lectures and in practicals. For each bit of code, I will start off by mentioning the reference to the lecture or practical and the page it's found (with a link that can be clicked on), then provide the code and guide you through understanding the code.

Let's start with lecture code, First Order Logic page 30

```haskell
sfz :: Int -> Int
sfz 0 = 0
sfz n = n + sfz (n-1)
```

Applying the concepts taught above, we know the type signature of this code. `sfz :: Int -> Int` says that “sfz” is a function that takes an `Int` as an input and returns an `Int` as an output. The lines after the signature show the function definition: what the function does. `sfz 0 = 0` says that if 0 is passed as an argument to the function “sfz” then the output would be `0` . `sfz n = n + sfz (n-1)` says that if `n` is provided as input, then the output is `n + sfz (n-1)` .

A few things to note regarding this, when numerous definitions of the function are given, Haskell will execute it from top to bottom. Hence, if we are calling `sfz 0` it would always execute the first line and not the second. First Order Logic page 35

```haskell
sumodd :: Int -> Int
sumodd 0 = 0
sumodd n = (2 * n - 1) + sumodd (n-1)
```

Using what you have learnt so far, try to identify what this syntax says.

This can be interpreted in the same way as above. `sumodd` is a function that takes an `Int` and returns an `Int` . If given `0`, the function will return `0`, else for any other value `n` it will return the value `(2 * n - 1) + sumodd (n-1)` .

FUN FACT! Both these are recursive functions, as the function is called within the function definition.

( The same concept can be used to understand functions `ta` and `tb` defined later on in the same slide.)

### Function composition

Note that the notation `.` has been used in numerous exercises and past papers, this denotes composite functions. If we consider the example `f . g x` , this can be written mathematically as `f(g x)`. In other words `f . g` is a new function that takes the output of `g` and provides it as input to `f`. Let's work through a simple example, consider the two functions:

```haskell
add1:: Int -> Int
add1 x = x+1
multiply5:: Int -> Int
multiply5 x = 5*x
```

It is clear that the function `add1` adds one to the input, and the function `multiply5` multiplies the input by 5. Now if we consider `multiply5 . add1` this is a function that takes an int as input and returns an int as output. Hence if we run `multiply5 . add1 8` this is the same as computing `multiply5 (add1 8) = multiply5 (8+1) = multiply5 9 = 45` .

Now moving on to the lectures on structural induction, here you come across the concepts of lists and trees. Let's start off by understanding what these two data types are.

### Lists

Lists in Haskell are just like the lists you find in the real world. Any list in Haskell has a particular type, for instance, `[Int]` that denotes a list of `Int` s. Here all the elements must be of `Int` type. A list is written within `[]` where each term is separated by commas. For example, a list of 1,2,3 and 4 would look like `[1,2,3,4]` . And an empty list would be `[]` .

This can be shown by:

```haskell
data [ a ] = [] | a : [ a ]
```

There are two main functions that are used with lists,

`:`, this takes in an element and a list and adds the element to the start of the list,
example : `1 : [2,3,4] = [1,2,3,4]`

`++` This takes two lists and returns a single list and concaternates them.
Example: `[1,2,3] ++ [4] = [1,2,3,4]`

A list can be defined either as an empty list denoted by `[]` or as an element added onto another list (empty or not) which can be represented as `x:xs` , where `x` denotes the first element and `xs` denotes the rest of the list.

In other words, any list that is not empty can be represented in the form `x:xs` . For example a list of one element can be denoted in the above notation as `x:[]` , where `x` takes the value of the element. A list of two elements can be written as an element added onto a list which already has an element `x:y:[]` which is the same as `[x,y]` , where `x` denotes the first element of the list and `y` denotes the second. Using this concept a list with numbers 1 to 5 can be represented as `1:[2,3,4,5]` .

Using this, let's try to understand the standard functions in page 6 of the structural induction slides

```haskell
length [] = 0 -- ( L1 )
length ( x : xs ) = 1 + length xs -- ( L2 )
```

We can convert this to a mathematical function, since we have multiple lines defining the function this would map to a piecewise function bellow:

function

In other words, what this says is if the list is empty then the length of the list is zero. If that's not the case we learnt above that any non-empty list can be represented in the form of an element concatenated onto another list hence we can write the list as `x:xs` . If that is the case then the length of the list is 1+ the length of rest of the list `xs` .

Feel free to skip to the next function if you understood what happens in the above function, but let me show how this function works with an example, lets say we want to calculate the length of the list `[1,2]` .

When we call `length [1,2]` , Haskell first checks if it is of the form `length []` which it is not because the list is not empty. So it then tries to see whether it is of the form `length x:xs` , where `x` is 1 and `xs` is `[2]` (pattern matching). As this is the case, `length [1,2]` becomes `1+ length [2]` then repeating the above process, we know the list is not yet empty, so it takes the form `x:xs` where `x=2` and `xs = []` because of this `1+ length [2]` becomes `1 + 1 + length []` now when `length []` is called Haskell identifies that the list is empty and returns 0, putting it all together we get:

`length [1,2] = 1+ length[2] = 1+ 1 + length [] = 1+ 1+ 0`

which is then evaluated to 2, which we know is correct as `[1,2]` is a list with two elements.

The same concept is used whenever coding with lists, first the function is defined for an empty list, and then for a list with one or more elements.

Looking at the other functions defined on the same page:

```haskell
map f [] = [] -- ( M1 )
map f ( x : xs ) = f x : map f xs -- ( M2 )
```

The code above defines function `map` which takes in a function and a list as inputs. Conceptually map applies the function `f` to all the elements of the input list. Similar to the above instance, we start off by defining this for an empty list, which would return an empty list, as there are no elements to apply the function to. Then the function is defined for the case when the list is not empty, what the second line of the code is saying is if a function `f` and a list `x:xs` are given to the function map, then we apply the function `f` to `x` and continue applying the function `f` to the rest of the list by calling the function with the same input function and the rest of the list.

Let's see how the above code would work by looking at how `map (*2) [1,2]` would run:

`map (*2) [1,2] = (*2) 1 : map [2] = (*2) 1 : (*2) 2 : [] = 2:4:[] = [2,4]`

because the input function was `*2` (multiplication by two) each step will apply `*2` to the first element of the list till the list is empty.

```haskell
[] ++ ys = ys -- ( A1 )
( x : xs ) ++ ys = x : ( xs ++ ys ) -- ( A2 )
```

Here the function `++` is defined, note how it is written in between two inputs, this is called infix notation please feel free to interpret the above as:

```haskell
(++) [] ys = ys -- ( A1 )
(++) ( x : xs ) ys = x : (++) xs ys -- ( A2 )
```

Using what you've learnt above, try to understand the above function on your own before reading the explanation below. I'll give you a hint to help, the function takes two lists as input.

So the above two lines of code can be interpreted as as :

If the first list is empty then the output is just the second list If not then the output is the first element of the first list added onto the result of `(++) xs ys`

Conceptually the above function will concaternate the first list passed as an argument to the second list. The breakdown of how the output for `(++) [1,2,3] [4,5,6]` is generated is below:

`(++) [1,2,3] [4,5,6] = 1: (++) [2,3] [4,5,6]= 1:2: (++) [3] [4,5,6] = 1:2:3:(++) [] [4,5,6] = 1:2:3:[4,5,6] = [1,2,3,4,5,6]`
