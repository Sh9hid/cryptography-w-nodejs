const { scryptSync, timingSafeEqual } = require("crypto");

// random value added to hash function like sha256 or md5 
const {scrypt, randomBytes} = requir('crypto')
function signup(email, password) {
    const salt = randomBytes(16).toString('hex');
    const hashedPassword = scryptSync(password, salt, 64).toString('hex')
    const user = {email, password: `${salt}:${hashedPassword}` }
}
    user.push(user);
    return user;


function login (email,password){
 const user = users.find(v => v.email === email);
 const [salt, key] = user.password.split(':');
// timming attack
 const keyBuffer = Buffer.from(key, 'hex');
 const match = timingSafeEqual();
 if (match) {
    return 'login successful'
 } else {
    return 'login failed'
 }
}