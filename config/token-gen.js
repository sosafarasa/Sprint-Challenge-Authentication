function generateToken(user){
    const payload = {
      subject: user.id,
      username: user.username
    };
    const options = {
      expiresIn: '1d'
    };
    return jwt.sign(payload, jwtKey, options)
};

module.exports = generateToken;