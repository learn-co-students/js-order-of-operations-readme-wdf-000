# Order Of Operations

## Objectives
+ Explain callback order of operations
+ Explain the order in which lines of code get executed

## Callback Order of Operations
Knowing when a line of code will run is easy if those lines are written like this:

```javascript
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

```javascript
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

What happened, why are things out of order now?! The answer is simple, `console.log(2)` won't run until the `$.getJSON` completes. Our code executes in order except when we reach the Ajax request. The order now looks like this:

- `console.log(1)` executes.
- We create an Ajax request with `$.getJSON`.
  + Our callback contains `console.log(2)` but `console.log(2)` isn't executed just yet.
- `console.log(3)` executes.
- Our Ajax request completes and `console.log(2)` executes.

## When Something Goes Wrong

As we learned in previous lessons, not all Ajax requests complete successfully. Sometimes things go wrong and errors happen. When we add both success and error callbacks, order of operations is a little more confusing. In this next example, we run `console.log("Success")` only if the Ajax request completes successfully but if it fails, we only run `console.log("Fail")`.

```js
console.log(1);
$.getJSON("https://api.github.com/repos/rails/rails/commits", function(response){
  // This is our success callback which is called automatically
  console.log("Success");
}).fail(function(response){
  // We have to explicitly configure the fail/error callback for getJSON to handle it
  console.log("Fail");
});
console.log(2);
```
In our new code, both the success and error callbacks will only be executed after `console.log(1)` and `console.log(2)`. Nothing new there but which callback is executed is dependent on how the Ajax request completes. If the Ajax request fails, the callback provided for error is executed. If the Ajax request is successful, the callback provided for success will be executed. Let's take a look at how our new code runs:

- The `console.log(1)` executes.
- We make an Ajax request with `$.getJSON`.
  + Our success callback contains `console.log("Success")`.
  + Our error callback contains `console.log("Fail")`.
- `console.log(2)` executes.
- Our Ajax request finishes.
  + If our request succeeded then `console.log("Success")` is executed.
  + If our request failed then `console.log("Fail")` is executed.

## Instructions
Let's write some code to test out what we learned. Once we finish, run the tests to confirm your work is correct.

- Create the function `showJsLove`. The function should use Ajax to make an API call to https://api.github.com/repos/rails/rails/commits. Use your knowledge of order of operations to log the following to the console:

- `I` before `Love`
- `Love` before `JavaScript`

Make sure the Ajax request is performed before you log `love`.

The function should log the following to the console:

- `I` before `Love`
- `Love` before `JavaScript`

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-order-of-operations-readme' title='Order Of Operations'>Order Of Operations</a> on Learn.co and start learning to code for free.</p>
