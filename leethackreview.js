//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//given an array(I already know that im going to have to use nums and an integer target, return indicies of the two numbers such that they add up to the target)

var twoSum = function (nums, target) {
  let map = {};
  for (var i = 0; i < nums.length; i++) {
    let newval = nums[i];
    let currenttarget = target - newval;
    if (map[currenttarget] !== undefined) {
      return [map[currenttarget], i];
    } else {
      map[newval] = i;
    }
  }
};

//Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal

function plusMinus(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let len = arr.length;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positive++;
    } else if (arr[i] < 0) {
      negative++;
    } else {
      zero++;
    }
  }
  let pos = (positive / len).toFixed(6);
  let neg = (negative / len).toFixed(6);
  let zer = (zero / len).toFixed(6);

  console.log(pos);
  console.log(neg);
  console.log(zer);
}

//Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
//Then print the respective minimum and maximum values as a single line of two space-separated long integers.

//given five positive integers, find the min and the max values that can be calculated by summing exactly 4 of the 5 ints
//print the min and max values as a single link of two space-seperated long integers

//the key here is to sort the array as best as possible. If you can sort the arrays then you're in a good position because i can
//for loop through the array and then increment the sum value and then i can add the sum+=1 and then min and max

function miniMaxSum(arr) {
  let sum = 0;
  let sort = arr.sort();

  for (var i = 0; i < sort.length; i++) {
    sum += sort[i];
  }

  let max = sum - sort[0];
  let min = sum - sort[sort.length - 1];

  console.log(min, max);
}

//Roman to integer ****** Did not get on first try //so keep an eye out for this problem Roman to integer
//There were two ways for me to complete this code, I can use a switch case that works or I can use a const map and then use a for loop and
//add and subtract the values, ill be honest i dont remember exactly where to add and minus the values

//M,C,M,X,C,IV
//1000,100,1000,10,100,1,5

//C,M=900
//X,C=90
//I,V=4

var romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  for (var i = 0; i < s.length; i++) {
    let curr = s[i];
    let next = s[i + 1];

    if (map[curr] < map[next]) {
      total -= map[curr];
    } else {
      total += map[curr];
    }
  }
  return total;
};

//0-2
// //Given a time in -hour AM/PM format, convert it to military (24-hour) time.
// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  let late = s.includes('PM');
  if (!late) {
    s = s.split('AM'); //split means to remove element
    s = s[0].split(':'); //s[0] splits array into two
    if (s[0] == '12') s[0] = '00';
    return s.join(':');
  } else {
    s = s.split('PM');
    s = s[0].split(':');
    if (s[0] != '12') s[0] = (parseInt(s[0]) + 12).toString();
    return s.join(':');
  }
}

//when completeing this problem watch out for the amount of 0 i am using as this is going to become a problem

// Longest Common Prefix
//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string ""

//this pattern is more of a memorization pattern although you should understand it, the pattern is more of a memorizaiton pattern,

//strs[0], //for loop var i=0; i<strs.length; i++ and then while the prefix is in the loop get the characters of the prefix and return the prefix

var longestCommonPrefix = function (strs) {
  let prefix = strs[0];
  for (var i = 0; i < strs.length; i++) {
    while (strs[i].indexOf(prefix)) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }
  return prefix;
};

//The indexOf() method returns the first index at which a given element can be found in the array,
//The substring() method returns the part of the string between the start and end indexes, or to the end of the string
