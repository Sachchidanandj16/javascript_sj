# Projects
## Links below
[Click Here for View]()

## 1. Theme Switcher Project

##### Index.html
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme changer</title>
  <link rel="stylesheet" href="Styles.css">
</head>
<body>
  <nav>
    <a href="/" area-current="page">Home</a>
    <a href="-blank" area-current="page">Video</a>
  </nav>
  <div class="canvas">
  <h1>Color Theme Switcher</h1>
  <span class="button" id="grey"></span>
  <span class="button" id="yellow"></span>
  <span class="button" id="black"></span>
  <span class="button" id="red"></span>

  <h2>Try one of these above colors to <span>change the theme</span></h2>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

##### Styles.css

```css
html {
  margin: 0;
}

span {
  display: block;
}
.canvas {
  margin: 100px auto 100px;
  width: 80%;
  text-align: center;
}

.button {
  width: 100px;
  height: 100px;
  border: solid black 2px;
  display: inline-block;
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.5rem;
  border-bottom: solid 1px #aaa;
  background-color: rgb(234, 234, 234);
}

nav a {
  display: inline-block;
  min-width: 9rem;
  padding: 0.5rem;
  border-radius: 0.2rem;
  border: solid 1px rgb(22, 22, 22);
  text-align: center;
  text-decoration: none;
  color: #1b1b1b;
}

nav a[aria-current='page'] {
  color: #000;
  background-color: #d4d4d4;
}

#grey {
  background: grey;
}

#black {
  background: black;
}
#red {
  background: red;
}
#yellow {
  background: yellow;
}

#terminal {
  margin-top: 20px;
  padding: 10px;
  background-color: #000;
  border-radius: 5px;
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}

```

##### Script.js
```js
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'black'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'red'){
      body.style.backgroundColor = e.target.id;
    }
  });
});
```