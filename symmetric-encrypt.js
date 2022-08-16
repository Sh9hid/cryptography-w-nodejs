// share a secret with someone and allow them to read a c
// certain message
// message is scrambled, and a randomized cipher is created
// to access the cipher, a shared-key is used. 
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');
//initial vector to prevent identical sequences of text, that doesn't create the exact same cipher

// cipher
const message = 'super-secret';
const key = randomBytes(32);
const iv = randomBytes(16);

const cipher = createCipheriv('aes256', key, iv);

// encrypt
const encryptedMessage = cipher.update(message, 'utf8', 'hex')
                            +cipher.final('hex');
    
// decrypt 

const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')
                                +decipher.final('utf8');

console.log(`Deciphered : ${decryptedMessage.toString('utf-8')}`);