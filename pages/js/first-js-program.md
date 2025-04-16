# How To Write Your First Javascript Program.

Your first program in JavaScript will teach you how you can display a message to the user when he visits your website, it is super simple, you should try it yourself.

### First: Creating an HTML file:

First you need to create an HTML file which will have the name "index.html".
After creating the file you write the current code inside it :

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
    
</body>
</html>
```

### Second: Writing JavaScript code:

Inside the body tag (between `<body>` and `</body>`) you will create a script tag (`<script></script>`)
<br>
Inside that script tag you will start typing your code.
<br>
You enter the following line :
<br>
alert("message text");
<br>
The result will be the code below which will display a popup containing "message text" for the user when he enters the page.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
</head>
<body>
<script>
    alert("message text");
</script>
</body>
</html>
```

To test your code you double click the "index.html" file you created and open it with your browser.

You will see a popup displayed like the one you will get when you click this button: 

<button class="popup-button" onclick="alert('message text')">
    Open Popup
</button>
 
<br>
<br>
Thanks for reading, hope it was useful.

<style>
    .popup-button {
        height: 2.8em;
        width: 9em;
        background: transparent;
        -webkit-animation: jello-horizontal 0.9s both;
        animation: jello-horizontal 0.9s both;
        border: 2px solid #016dd9;
        outline: none;
        color: #016dd9;
        cursor: pointer;
        font-size: 17px;
    }

    .popup-button:hover {
        background: #016dd9;
        color: #ffffff;
        animation: squeeze3124 0.9s both;
    }

    @keyframes squeeze3124 {
        0% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }

        30% {
            -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
        }

        40% {
            -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
        }

        50% {
            -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
        }

        65% {
            -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
        }

        75% {
            -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
        }

        100% {
            -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
        }
    }

</style>