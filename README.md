# ION Coding Class

## Folder Structure Setup

1. First create a folder on your desktop named "ION Coding Class"
2. Open "ION Coding Class" folder and create three(3) sub-folders and one(1) file.
  * Eye Exam
  * Lights
  * Puppy Love
  * script.js (file)


### Exercise 1 - Eye Exam
For this exercise we will be making an Eye Exam using a random number generator.

1. First create 2 files in the "Eye Exam" folder
  * EyeExam.html
  * EyeExam.css
2. Open/Edit "EyeExam.html"
3. Add the outer most html tags to the file.
```
<html>
</html>
```
4. Next Add the head and the body inside/between the html tags
```
<html>
      <head>
      </head>
      <body>
      </body>
</html>
```
5. Finally add paragraph (p) tag in the body with the words "Hello World" between the p tags as see bellow.
```
<html>
      <head>
      </head>
      <body>
        <p>Hello World</p>
      </body>
</html>
```
6. You are ready to Test. Open this file in your web browser of choice by double clicking the . Congrats you have made a website.

7. Next we will be linking the "EyeExam.css" to the "EyeExam.html". Simply add the following to the head.
```
<link rel="stylesheet" type="text/css" href="EyeExam.css">
```
8. Next we will center the exam by adding a center (center) tag around the p tag.
```
  <center>
      <p>Hello World</p>
  </center>
```
9. Next give the p tag a class and id (This and be whatever you want but for simplicity lets use "One").
```
<p id="One" class="One">A</p>
```

10. Now let's make five(5) more copies of the p tag. Don't forgive to give each unique id and class.
<br /> I recommend: One, Two, Three, Four, Five, Six
```
<p id="One" class="One">A</p>
<p id="Two" class="Two">E</p>
<p id="Three" class="Three">I</p>
<p id="Four" class="Four">O</p>
<p id="Five" class="Five">U</p>
<p id="Six" class="Six">Y</p>
```

11. Next we are you to add css to webpage. Open the "EyeExam.css" ass the following:
```
.One{
}
```
Note: The period(.) is the operator for the class. When combined with the name of the class name assigned in the html, the look of that tag will be changed.

12. Next like before make five(5) copies of class. Be sure to name the same as the classes used in the html.
```
.One{
}
.Two{
}
.Three{
}
.Four{
}
.Five{
}
.Six{
}
```

13. Lastly change the font sizes by adding that following to each class:
```
font-size: 25px;
```
Nots: We are done with the .css file

14. Now it's time to being your page to life. Go back to the .html file. Below the center tag paste the following:
```
<script src="../script.js"></script>
<script>
</script>
```
15. Open "script.js" and paste the following:
```
function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
```
16. Open the "EyeExam.html" and paste the following between the last two(2) script tags.
```
let min = 65;
let max = 90;
document.getElementById("One").innerHTML = String.fromCharCode(randomIntFromInterval(min, max));
```
Note: [ASCII Table](https://www.genuinecoder.com/wp-content/uploads/2012/07/asciifull.gif)

17. Finally Copy the document line five(5) more times and replace the ID.

18. Refresh the screen and enjoy your Eye Exam.

### Exercise 2 - Puppy Love

1. First create 2 files in the "Eye Exam" folder
  * manifest.json
  * popup.html
2. Open/Edit "manifest.json" and paste the following:
```
{
      "manifest_version" : 2,
      "name" : "Puppy Love",
      "version" : "1.0",
      "browser_action" : {
          "default_popup" : "popup.html"
      }
}
```
Note : You and change the name of the application the anything you want.
3. Open/Edit popup.html. Add html and body tags and paste the following between the body tags.
```
<img src="https://loremflickr.com/500/500/puppy" />
```
Note: [Lorem Flickr](https://loremflickr.com)

4. Open chrome browser [Download here] (https://www.google.com/chrome/), if you don't already have it. Go to Menu -> More Tools -> Extensions. In the upper right Turn on Developer Mode. Click "Load unpacked" and navigate to your Puppy Love Folder. The application will be added to your extensions list automatically.

### Exercise 3 - Lights

1. Copy the entirety of EyeExam.html and paste it in to "Lights.html".
2. Replace body content with the following:
```
  <input type="button" value="On" onclick="on()">
  <input type="button" value="Change Color" onclick="changeColor(randomIntFromInterval(1, 6))">
<input type="button" value="Off" onclick="off()">
```
3. Add the following Three(3) functions to script.js:
  * on()
  * changeColor()
  * off()
