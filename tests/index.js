var proclaim = require('proclaim');
var parseJSON = require('..');

suite('convert to map', function() {
    test('a simple json', function() {
        var json = '{ "test": true }';

        var map = parseJSON(json);

        proclaim.instanceOf(map, Map);
        proclaim.strictEqual(map.size, 1);
        proclaim.isTrue(map.has('test'));
        proclaim.strictEqual(map.get('test'), true);
    });
});
