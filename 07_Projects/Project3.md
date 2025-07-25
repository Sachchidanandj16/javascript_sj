# Project : Current Time and Date Shower site
##### [Click here for Youtube Video](https://www.youtube.com/watch?v=EGqHVjU-fas&t=2407s)

##### Index.html (inline with Internal CSS)
```html & css
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" type="text/css" href="Styles.css" />
    <title>Your Local Time</title>
    <style>
      body {
        background-color: #212121;
        color: #fff;
      }
      .center {
        display: flex;
        height: 100vh;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }
      #clock {
        font-size: 40px;
        background-color: orange;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
      #Date {
        font-size: 40px;
        background-color: green;
        padding: 20px 50px;
        margin-top: 10px;
        border-radius: 10px;
      }
    </style>
  </head>
  <body>
    <nav>
      <a href="/" aria-current="page">Home</a>
      <a target="_blank" href="https://www.youtube.com/@chaiaurcode"
        >Youtube channel</a
      >
    </nav>
    <div class="center">
      <div id="banner"><span>Your local time</span></div>
      <div id="clock"></div>
    </div>
    <div class="center">
      <div id="banner"><span>Today Date is:</span></div>
      <div id="Date"></div>
    </div>
    <script src="script.js"></script>
  </body>
</html>

```

##### script.js
```js
const clock = document.querySelector("#clock");
const Shyam = document.getElementById('Date');
setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
  Shyam.innerHTML = date.toDateString();
}, 1000);
```