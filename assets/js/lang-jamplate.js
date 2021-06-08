//the power of bodging
PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
            [
                PR['PR_STRING'],
                /\"[^"]*\"/,
                null,
                '"'
            ],
            [
                PR['PR_STRING'],
                /\'[^']*\'/,
                null,
                "'"
            ],
        ],
        [
            // Commands
            [PR['PR_KEYWORD'], /#[A-Za-z]+/],
            // Injection Open
            [PR['PR_KEYWORD'], /#{/],
            // Injection Close
            [PR['PR_KEYWORD'], /}#/],
            // Variables like: __variable__
            [PR['PR_ATTRIB_VALUE'], /__[A-Za-z]+__/],
            // Variables like: $variable
            [PR['PR_ATTRIB_NAME'], /\$[A-Za-z]+/],
            // Numbers
            [PR['PR_ATTRIB_VALUE'], /[0-9]+/],
            // Operators
            [PR['PR_PUNCTUATION'], /[+-=!\[\]\{\}]+/],
        ]),
    ['jamplate', 'jh']
);