test("recycle basics", function() {
    var arr1 = ["a","b","c"];
    equal(recycle(arr1), "a","returned zero element");
    equal(recycle(arr1), "b","returned one element");
    equal(recycle(arr1), "c","returned two element");
    equal(recycle(arr1), "a","returned zero element");
 });

test("recycle empty array", function() {
    var arr1 = [];
    equal(recycle(arr1), undefined,"returned undefined");
});

test("recycle not an array", function() {
    var notArray = "string";
    equal(recycle(notArray), "not an array","returned not an array");
});