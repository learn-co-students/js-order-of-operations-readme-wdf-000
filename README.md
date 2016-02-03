# Order Of Operations

## Objectives
+ Explain callback order of operations
+ Explain the order in which lines of code get executed

## Callback Order of Operations
Knowing when a line of code will run is easy if those lines are written like this:

```js
console.log(1);
console.log(2);
console.log(3);
```

We start from line #1 and execute each statement in order. If we run this code we'll see the following in our console:

```
1
2
3
```

Nothing special right? Each console statement is executed one after another. When we introduce callbacks, the order of operation changes. If we were to take our previous example and place the `console.log(2)` inside of the callback of an Ajax request:

```js
console.log(1);
$.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
  console.log(2);
});
console.log(3);
```

The console output would change to this:

```
1
3 // The 3 is printed before the 2!!
2
```

What happend, why are things out of order now?! The answer is simple, `console.log(2)` won't run until the `$.getJSON` completes. Our code executes in order except when we reach the Ajax request. The order now looks like this.

- `console.log(1)` executes.
- We create an Ajax request with `$.getJSON`.
  - Our callback contains `console.log(2)` but `console.log(2)` isn't executed just yet.
- `console.log(2)` executes.
- Our ajax request completes and `console.log(2)` executes.

## When something goes wrong

As we learned in previous lessons, not all Ajax requests complete successfully. Sometimes things go wrong and errors happen. When we add both success and error callbacks, order of operations is a little more confusing. In this next example, we run `console.log("Success")` only if the Ajax request completes successfully but if it fails, we only run `console.log("Fail")`.

```js
console.log(1);
$.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
  console.log("Success");
}).fail(function(response){
  console.log("Fail");
});
console.log(2);
```
In our new code, both the success and error callbacks will only be executed after `console.log(1)` and `console.log(2)`. Nothing new there but which callback is executed is dependent on how the Ajax request completes. If the Ajax request fails, the callback provided for error is executed. If the Ajax request is successful, the callback provided for success will be executed. 

- `console.log(1)` executes.
- We create an Ajax request with `$.getJSON`.
  - Our success callback contains `console.log("Success")`.
  - Our error callback contains `console.log("Fail")`.
- `console.log(2)` executes.
- Our Ajax request finishes.
  - If our request succeeded then `console.log("Success")` is executed.
  - If our request failed then `console.log("Fail")` is executed.

## Instructions
Let's write some code to test out what we learned. Once we finish, run the tests to confirm your work is correct.

- Create the function `showJsLove`
- Log the following to the console
  - `I` before `Love`
  - `Love` before `JavaScript`
-  Writing `JavaScript` to the console must be done in an Ajax callback.
  -  Use https://api.github.com/repos/rails/rails/commits as your url 
-  The Ajax request must be performed before we log `Love`

## Resources
<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-order-of-operations-readme' title='Order Of Operations'>Order Of Operations</a> on Learn.co and start learning to code for free.</p>
