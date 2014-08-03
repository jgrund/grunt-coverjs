if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
var __$coverInit = function(name, code){
	if (!__$coverObject[name]) __$coverObject[name] = {__code: code};
};
var __$coverInitRange = function(name, range){
	if (!__$coverObject[name][range]) __$coverObject[name][range] = 0;
};
var __$coverCall = function(name, range){
	__$coverObject[name][range]++;
};
__$coverInit("test/fixtures/nested/testCoverage3.js", "var testingCoverage = function () {\n  var a = 1;\n  var b = 2;\n  var c = 3;\n\n  if (a === 1) {\n    b = c;\n  } else {\n    c = b;\n  }\n};\n");
__$coverInitRange("test/fixtures/nested/testCoverage3.js", "0:131");
__$coverInitRange("test/fixtures/nested/testCoverage3.js", "38:47");
__$coverInitRange("test/fixtures/nested/testCoverage3.js", "51:60");
__$coverInitRange("test/fixtures/nested/testCoverage3.js", "64:73");
__$coverInitRange("test/fixtures/nested/testCoverage3.js", "78:128");
__$coverInitRange("test/fixtures/nested/testCoverage3.js", "97:102");
__$coverInitRange("test/fixtures/nested/testCoverage3.js", "119:124");
__$coverCall('test/fixtures/nested/testCoverage3.js', '0:131');
var testingCoverage = function () {
    __$coverCall('test/fixtures/nested/testCoverage3.js', '38:47');
    var a = 1;
    __$coverCall('test/fixtures/nested/testCoverage3.js', '51:60');
    var b = 2;
    __$coverCall('test/fixtures/nested/testCoverage3.js', '64:73');
    var c = 3;
    __$coverCall('test/fixtures/nested/testCoverage3.js', '78:128');
    if (a === 1) {
        __$coverCall('test/fixtures/nested/testCoverage3.js', '97:102');
        b = c;
    } else {
        __$coverCall('test/fixtures/nested/testCoverage3.js', '119:124');
        c = b;
    }
};