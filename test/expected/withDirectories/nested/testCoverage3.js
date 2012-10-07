if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["test/fixtures/nested/testCoverage3.js"] = {};
__$coverObject["test/fixtures/nested/testCoverage3.js"].__code = "var testingCoverage = function () {\n  var a = 1;\n  var b = 2;\n  var c = 3;\n\n  if (a === 1) {\n    b = c;\n  } else {\n    c = b;\n  }\n};\n";
__$coverObject["test/fixtures/nested/testCoverage3.js"]["0:131"] = 0;
__$coverObject["test/fixtures/nested/testCoverage3.js"]["38:47"] = 0;
__$coverObject["test/fixtures/nested/testCoverage3.js"]["51:60"] = 0;
__$coverObject["test/fixtures/nested/testCoverage3.js"]["64:73"] = 0;
__$coverObject["test/fixtures/nested/testCoverage3.js"]["78:128"] = 0;
__$coverObject["test/fixtures/nested/testCoverage3.js"]["97:102"] = 0;
__$coverObject["test/fixtures/nested/testCoverage3.js"]["119:124"] = 0;
__$coverObject['test/fixtures/nested/testCoverage3.js']['0:131']++;
var testingCoverage = function () {
    __$coverObject['test/fixtures/nested/testCoverage3.js']['38:47']++;
    var a = 1;
    __$coverObject['test/fixtures/nested/testCoverage3.js']['51:60']++;
    var b = 2;
    __$coverObject['test/fixtures/nested/testCoverage3.js']['64:73']++;
    var c = 3;
    __$coverObject['test/fixtures/nested/testCoverage3.js']['78:128']++;
    if (a === 1) {
        __$coverObject['test/fixtures/nested/testCoverage3.js']['97:102']++;
        b = c;
    } else {
        __$coverObject['test/fixtures/nested/testCoverage3.js']['119:124']++;
        c = b;
    }
};