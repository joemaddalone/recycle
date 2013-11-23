test("recycle basics", function() {
    var arr1 = ["a","b","c"];
    equal(recycle(arr1), "a");
    equal(recycle(arr1), "b");
    equal(recycle(arr1), "c");
    equal(recycle(arr1), "a");
 });

test("recycle empty array", function() {
    var arr1 = [];
    equal(recycle(arr1), undefined);
});

test("recycle not an array", function() {
    var notArray = "string";
    equal(recycle(notArray), "not an array");
});