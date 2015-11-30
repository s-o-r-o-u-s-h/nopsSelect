NOPS SELECT Directive for angular
======
**nopsSelect** directive is a very simple and easy to use directive for creating a custom select box which has features
such as searching through values and executing custom function for choosing _More.._ value. **nopsSelect** is not a
wrapper for any jquery select boxes.It's nearly 100% written in angular without any jquery code.
It's very simple and has no complexity, So you can edit it and customize it by yourself.
Dependencies
---------------
For now The only thing you should need is [off-click](https://github.com/TheSharpieOne/angular-off-click) directive. But
soon, I'll write some code to make it an independent directive.

This Directive is tested with **angular 1.3.3** and it shouldn't be a problem with newer versions of angular. But if you
found an issue, Please tell [me](mailto:soroush.gh2@gmail.com) to fix it.
Installation
------------
Download and clone it from github and in your code, Include the js and css file:

```html
<html>
<head>
....
<link rel="stylesheet" href="path/nops-select/nopsSelect.min.css">
</head>
<body>
....
<script src="path/angular-off-click/offClick.js"></script>
<script src="path/nops-select/nopsSelect.min.js">
</body>
</html>
```
and in your main angular app:

```javascript
angular.module('app',[
    ...
    'offClick',
    'nopsSelect'
    ]);
```
Usage/Example
-------------
```html
<div class="row">
        <nops-select class="col-sm-4" dt-list="data" value="selected" more="func1()"></nops-select>
</div>
```
List of attributes:
    |   Attribute       |   Definition                                              | Notes                                                          |
    |-------------------|-----------------------------------------------------------|----------------------------------------------------------------|
    |   **dt-list**     |   List of data should be represented by directive         | Array of json objects that should have an id and name property |
    |   **value**       |   Selected value                                          |                                                                |
    |   **more**        |   Function that will be executed upon clicking on more..  |                                                                |
**Note:** All of this attributes are required.

License
-------
See the `LICENSE.MD` file.

TODO:
-----
+ Add validation
+ Integrate with ngModel
+ Add Enable/Disable functionality
