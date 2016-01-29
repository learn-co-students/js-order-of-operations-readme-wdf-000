# Order Of Operations

## Objectives
+ Explain callback order of operations
+ Explain the order in which lines of code get executed

## Callback Order of Operations

Order of operations can be confusing, code not run line by line like in ruby, second line doesn't fire until second line finishes, even if that means getting an API request, things won't happen until the data is retrieved.

```js
console.log(1)
$.getJSON("http://api.giphy.com/v1/gifs/search?q=fat+cat&api_key=dc6zaTOxFJmzC", function(response){
        //do something with the response data here!
console.log(2)
});
console.log(3)
```

give more examples - some with success and some with failure and explain what code fires when

## Instructions
have students write code that has alerts or console.log print in order that you set - like with numbers `1` before `2` before `3`

or you can have them make a complete sentence - `i love javascripe`: `i` before `love` before `javascript` within their ajax get request

will need tests - if console.log can use spy to see order the console.log comes in

## Resources
<p data-visibility='hidden'>View <a href='https://learn.co/lessons/js-order-of-operations-readme' title='Order Of Operations'>Order Of Operations</a> on Learn.co and start learning to code for free.</p>
