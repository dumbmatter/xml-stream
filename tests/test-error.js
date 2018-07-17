#!/usr/bin/env node
'use strict';

var fs = require('fs')
	, filename = require('path').resolve(__dirname, 'fixtures/invalid-xml.xml')
  , XmlStream = require('../lib/xml-stream');

describe('XmlStream', function() {
	it('should emit error event on invalid XML', function(done) {
		var stream = fs.createReadStream(filename);
		var xml = new XmlStream(stream);
		xml.on('error', function (err) {
			done();
		});
	});
});
