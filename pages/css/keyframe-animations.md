
# How To Create An Animation In CSS

You will learn in this post how to create animations in css using CSS keyframe animations

## First step is to create the keyframes animation

You can use the "from" and "to" keywords to specify the start value and end value of the property you want to animate, or you can use percentages "0%", "50%", "100%" to specify the value of the property at a certain timestamp during the animation.

Here is how you create the animation:
```css
@keyframes animation-name {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
```


You can animate multiple properties, for example: opacity, color, width, height, etc...

## Apply the animation
To apply the animation to an html element, you create the element and give it an id or class to be able to select it in css. 

```html
<div class="element"></div>
```

In the css you select the element you want to animate and set the "animation-name" property to the name of the animation you have created earlier. 

```css
.element {
    animation-name: animation-name;
    animation-duration: 3s;
}
```

You need to set the animation duration property for it to work, which will specify how much time the animation will take to finish running.

You can specify other properties for your animation:

```css
.element {
      animation-name: animation-name;    /* Name of the animation keyframes */
      animation-duration: 3s;            /* Duration of the animation */
      animation-timing-function: ease;   /* Timing function (e.g., ease, ease-in, ease-out, linear) */
      animation-delay: 1s;               /* Delay before the animation starts */
      animation-iteration-count: 2;      /* Number of times the animation should run */
      animation-direction: alternate;    /* Direction of the animation (e.g., alternate, reverse) */
      animation-fill-mode: forwards;     /* Fill mode (e.g., forwards: the value of the properties animated will keep the last value after the animation finishes) */
}
```

## Here is a full example with the resulting animation:

```html
    <style>
        @keyframes fade-in {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }
        .fading-text {
            animation-name: fade-in;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }
    </style>
    
    <div class="fading-text">
        Thanks for reading, hope it was useful!
    </div>

```


<style>
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    .fading-text {
        animation-name: fade-in;
        animation-duration: 3s; animation-iteration-count: infinite;
    }
</style>

<div class="fading-text">
    Thanks for reading, hope it was useful!
</div>