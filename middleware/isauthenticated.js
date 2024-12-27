const isAuthenticated = (req, res, next) =>{
    const isLoggedIn = false
    if(isLoggedIn){
        next()
    }else{
        res.json({
            message: 'unathorized to enter this area'
        })
    }
}

export {isAuthenticated}