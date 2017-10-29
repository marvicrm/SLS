# SLS
Simple Loading Screen (SLS) - A very lightweight standalone javascript project for blocking the content during ajax request

## Basic Usage
```javascript
window.onload = function() {	

  // begin loading
  sls.begin('Please Wait...');

  // end loading
  setTimeout(function(){
    sls.end('The End...');
  },2000);

}
```

## Methods
```javascript
// will block the whole page
// @param arg: a string to be displayed during initialization
sls.begin(arg)
```
### Screenshot
![img](https://i.imgur.com/qmoM254.png)

```javascript
// @param arg: optional, can be a callback/exception message from ajax
sls.end(arg)
```
