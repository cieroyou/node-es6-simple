const isAuth = (req, res, next) => {
    console.log('checking Auth')
    next()
  }

export default isAuth;