var object2map = require('object2map');

/**
 * The method parses a string as JSON, optionally transforming the value produced by parsing.
 * Unlike JSON.parse(), this returns Map instead of basic Object.
 *
 * @param  {string}   text      The string to parse as JSON
 * @param  {function} [reviver] If a function, prescribes how the value originally produced by parsing is transformed, before being returned
 * @return {*}
 * @throws SyntaxError
 */
module.exports = function(text, reviver) {
    return JSON.parse(
        text,
        reviver !== undefined ?
            function(key, value) {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    value = object2map(value);
                }

                return reviver(key, value);
            } :
            function(key, value) {
                if (typeof value === 'object' && !Array.isArray(value)) {
                    return object2map(value);
                }

                return value;
            }
    );
};
