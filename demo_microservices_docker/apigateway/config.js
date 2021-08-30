let config={
    WWW_PORT:(process.env.PORT || 8030),
    todo_URL:(process.env.todo_URL || 'http://localhost:8010'),
    user_URL:(process.env.user_URL || 'http://localhost:8020')
}

module.exports=config;