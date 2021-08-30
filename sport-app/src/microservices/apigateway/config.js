const config = {
    WWW_PORT:(process.env.PORT || 7000),
    USER_PORT:(process.env.user_PORT || 'http://localhost:7001'),
    PLAYER_PORT:(process.env.player_PORT || 'http://localhost:7002')
}
module.exports = config;