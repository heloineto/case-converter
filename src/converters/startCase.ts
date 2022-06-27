import upperFirst from "../lib/utils/upperFirst";
import words from "../lib/utils/words";

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @see camelCase, lowerCase, kebabCase, snakeCase, upperCase, upperFirst
 * @example
 *
 * startCase('foo bar')
 * // => 'Foo bar'
 *
 * startCase('foo Bar')
 * // => 'Foo Bar'
 */
const startCase = (string: string) => upperFirst(string.toLowerCase());

export default startCase;
