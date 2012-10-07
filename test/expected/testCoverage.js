if (typeof __$coverObject === "undefined"){
	if (typeof window !== "undefined") window.__$coverObject = {};
	else if (typeof global !== "undefined") global.__$coverObject = {};
	else throw new Error("cannot find the global scope");
}
__$coverObject["test/fixtures/testCoverage.js"] = {};
__$coverObject["test/fixtures/testCoverage.js"].__code = "var testingCoverage = function () {\n  var a = 1;\n  var b = 2;\n  var c = 3;\n\n  var d = a + b + c === 6;\n};\n";
__$coverObject["test/fixtures/testCoverage.js"]["0:104"] = 0;
__$coverObject["test/fixtures/testCoverage.js"]["38:47"] = 0;
__$coverObject["test/fixtures/testCoverage.js"]["51:60"] = 0;
__$coverObject["test/fixtures/testCoverage.js"]["64:73"] = 0;
__$coverObject["test/fixtures/testCoverage.js"]["78:101"] = 0;
__$coverObject['test/fixtures/testCoverage.js']['0:104']++;
var testingCoverage = function () {
    __$coverObject['test/fixtures/testCoverage.js']['38:47']++;
    var a = 1;
    __$coverObject['test/fixtures/testCoverage.js']['51:60']++;
    var b = 2;
    __$coverObject['test/fixtures/testCoverage.js']['64:73']++;
    var c = 3;
    __$coverObject['test/fixtures/testCoverage.js']['78:101']++;
    var d = a + b + c === 6;
};