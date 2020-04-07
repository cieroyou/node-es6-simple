const attachCurrentUser = (req, res, next) => {
    console.log('attach CurrentUser');
    next();
  }

  export default attachCurrentUser;