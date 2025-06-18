// https://maxcode.dev/problems/email-obfuscator/

function obfuscate(email) {
    const replaceAt = email.replaceAll('@', ' at ');
    const replaceDot = replaceAt.replaceAll('.', ' [dot] ');
    return replaceDot;
}

console.log(obfuscate('test@123.com'));
// 'test [at] 123 [dot] com'

console.log(obfuscate('Code_warrior@foo.ac.uk'));
// 'Code_warrior [at] foo [dot] ac [dot] uk'
