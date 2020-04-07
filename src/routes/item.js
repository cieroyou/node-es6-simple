import isAuth from '../middlewares/isAuth';
import attachCurrentUser from '../middlewares/attachCurrentUser'


export default (app) => {
    app.get('/item/', isAuth, async (req, res) => {
        return res.send('/item/')
    })

    app.get('/item/id', async(req,res) => {
        return res.send('/item/id')
    })
}