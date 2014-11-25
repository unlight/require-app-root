var test = require("tape");
var basename = require("path").basename;
var name = ["", basename(__filename)].join(" ").trim();

var mkdirp = require("mkdirp");
var fs = require("fs");

var modulePath = "./test-app/modules/load-require.js";

test(name, function(t) {
	mkdirp.sync("./test-app/modules");
	var rs = fs.createReadStream("./../index.js");
	var ws = fs.createWriteStream(modulePath);
	rs.pipe(ws).on("finish", function() {
		require("./test-app/modules/load-require.js");
		t.ok(require("~/library/a.js"), "a");
		t.ok(require("~/b.js"), "b");

		t.end();
	});
});