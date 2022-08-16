//secure-hashing-algorithm
// a hashing function comes up with same patterns
//rainbow table, precomputed hashes
const { createHash } = require('crypto');
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}
let password ='hi-mom';
const hash1 =hash(password);
console.log('hash1')

password='hi-mum';
const hash2 = hash(password);
const match = hash1 == hash2;
console.log(match ? '🚀' : '🤦‍♂️password no match bye-bye');