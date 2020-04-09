# Radish
A simple HTML formatter using JavsScript

## Prerequisites
Radish requires a directory of HTML files to work.
Start by making a directory structure like this

```
- example-html-dir
  \ HTML files
```

## Usage

In your `example-html-dir` change whatever file you need data added to with this key format `^!key-name!^`
>NOTE: Keys work like JS object keys, what you put in your html file has to match in your program file

`example.html` Before:
```HTML
<body>
  <h1>Hello, World!</h1>
</body>
```
`example.html` After:
```HTML
<body>
  <h1>^!key-name!^</h1>
</body>
```

`example.js`
```JavaScript
const daikon = require('PATH TO RADISH/daikon.js');

daikon.loadDirectory('PATH TO HTML DIR');

daikon.format('example.html', [{'key-name': 'Hello, world!'}]);

// Returns the html file formatted as a string
//
// "<body>
//   <h1>Hello, World!</h1>
// </body>"
```

## Functions
```JavaScript
daikon.format('FILE', [ARRAY OF OBJECTS])
```
* Takes the name of the file you want formatted
* Takes an array of objects

* Returns a formatted string of the original html file

## Install
`git clone https://github.com/BrandonGul/radish.git`

## License
MIT
