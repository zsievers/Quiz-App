# Quiz-App


# Take Aways
<li>Saving High Scores into local storage:</li>
<li>Local storage only uses key value pairs with value being a string. </li>
<li>You can work with arrays but you have to convert them into a JSON string using JSON.stringify([])</li>
<li>And to then make that into an actual array you can use JSON.parse.localStorage</li>


<li>creating a top 5 scores algorithm:</li>
<li>You add the score to the array .push(score)</li>
<li>You sort it .sort((a,b) => b.scoer - a.score </li>
<li>you splice any of the extra scores after top 5 .splice(5)</li>
<li>then update the localStorage</li>

<li>CSS</li>
<li></li>
<li></li>
<li></li>

## Spinning Loader
   
This was a fun challenge. All in the CSS file, I used the CSS to style the 
loader and the @keyframe & animation tags to make the loader spin.

```
      animation: spin 2s linear infinite;
```
I created a border then add animation linear infine so that it makes a loop every 2 seconds.

```
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
```

Starting at 0% -> transform roatate (0deg) and end 100% -> transform rotate(360deg)
then in loader id use animation spin for 2seconds 
