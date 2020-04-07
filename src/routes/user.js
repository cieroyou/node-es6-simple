import isAuth from '../middlewares/isAuth'
import attachCurrentUser from '../middlewares/attachCurrentUser'

export default (app) => {
    app.get('/user/login', async (req,res) => {
        return res.send('/user/login')
    })
    app.get('/user/', isAuth, attachCurrentUser, function (req, res) {
        //출력 : checkingAuth -> attach CurrentUser
        res.send('/user')
    });
    
    app.get('/user/list', function (req, res) {
        res.send('/user/list')
    });
};