var Module = require("module");
var path = require("path");
var assert = require("assert");
var fs = require("fs");

// Find application root.
// Note: application root means that in this directory exists package.json file.
var appRoot = findRootDirectory(null);

function findRootDirectory(directory, count) {
	directory = directory || __dirname + "/..";
	var exists = fs.existsSync(directory + "/package.json");
	if (!exists) {
		count = ~~count + 1;
		if (count > 250) {
			throw new Error("Couldn't find package.json file in parent directories.");
		}
		return findRootDirectory(directory + "/..", count);
	} else {
		directory = path.normalize(directory);
		return directory;
	}
}

var baseModuleResolveFilename = Module._resolveFilename;

Module._resolveFilename = function(request, parent) {
	var result;
	assert(typeof request === "string", "First must be a string.");
	if (request.slice(0, 2) === "~/") {
		request = path.join(appRoot, request.slice(2));
	}
	result = baseModuleResolveFilename(request, parent);
	return result;
}