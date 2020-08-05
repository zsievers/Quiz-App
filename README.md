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

## CSS
<i>I chose not to use Bootstrap for this project and focus more attention to CSS3. Some of my functions might have taken longer than I would have liked, but I learned how to create a progress bar with Javascript and CSS.</i>

<i>I created progressBarFull inside the progressBar parent div. By taking the questionCounter dividing by the MAX_QUESTIONS and multiplying it by 100, I am able to dynamically change the width of the progressBarFull. This is cool, because as I add more and more questions, I don't have to adjust the bar as I would if I had just hard coded the progress bar. </i>
```
progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
```

## Spinning Loader
   
<i>This was a fun challenge. All in the CSS file, I used the CSS to style the 
loader and the @keyframe & animation tags to make the loader spin.</i>

```
animation: spin 2s linear infinite;
```
<i>I created a border then add animation linear infine so that it makes a loop every 2 seconds. Using the @keyframe spin tag allows you take control how full of a rotation it can make.</i>
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
