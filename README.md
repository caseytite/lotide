# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @caseyjt/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(array1,array1)`: Takes in 2 arrays and logs a message to the console based on the return value from the eqArrays() function.

- `assertEqual(actual,expected)`: Takes in 2 values and logs a message to the console indicating if they are equal values.

- `assertObjectsEqual(actual,expected)`: Takes in 2 Objects and logs a message to the console idicating if their values are equal.

- `countLetters(string)`: Takes in a String and returns an Object with the input String characters as Keys and the number of times they appear in the String as values.

- `countOnly(array,object)` : Takes in an Array of items and an Object with Keys set to a Boolean value. It will return the number of times the item appears in the Array only if the Object with that key is set to True.

- `eqArrays(array1,array2)` : Takes in 2 Arrays and will return a Boolean value based on if the items in the Array are equal. Will work for Arrays with nested Arrays by using Recursion.

- `eqObjects(object1,object2)` : Takes in 2 Objects and will return a Boolean value based on if the Key-Value pairs are the same. Will work for Objects with nested Arrays and Objects by using Recursion.

- `findKeyByValue(object,value)` : Takes in an Object and a value and if the value is in the Object will return the Key name, and if not will return undefined.

- `findKey(object, callback)` : Takes in an Object and a callback function and will return the Key with the specified value. If that value does not exist will return undefined.

- `flatten(array)` : Takes in an Array with nested Arrays and returns one Array with all the values.

- `head(array)` : Takes in an Array and returns the first value in that Array.

- `letterPostions(string)` : Takes in a string and returns an Object where the Keys are the characters of the String and the Values are the indexes in which they appear.

- `map(array, callback)` : Takes in an Array and a callback function and returns a new Array with each items value modified as specified by the callback function.

- `middle(array)` : Takes in an Array and returns the value in the middle index of that Array if the Array is of an uneven length. If the Array is of an even length it will return the two values in the middle of said Array. If the Array's length is <=2 it will return an empty Array.

- `tail(array)` : Takes in an Array and returns the item at the end of the Array. Will return an empty Array if the input Array's length is <=1.

- `takeUntil(array, callback)` : Takes in an Array and a callback function and will return a new Array with the items of the input Array up until the specified parameter of the callback function is evaluated to True.

- `without(array, itemToRemove)` : Takes in an Array and value to remove and will return a new Array without the specified value in it.
