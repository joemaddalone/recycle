# recycle

Recycles array iteration by returning to zero element as needed

## About

A JavaScript library by Joe Maddalone.

See the [project homepage](http://joemaddalone.github.io/recycle).

## Installation

Using Bower:

    bower install recycle

Or grab the [source](https://github.com/joemaddalone/recycle/blob/master/dist/recycle.js) ([minified](https://github.com/joemaddalone/recycle/blob/master/dist/recycle.min.js)).

## Usage

Basic usage is as follows:

	var arr = ['a','b']
    recycle(arr) // a;
    recycle(arr) // b;
    recycle(arr) // a;
    recycle(arr) // b;

## License

MIT. See `LICENSE.txt` in this directory.
