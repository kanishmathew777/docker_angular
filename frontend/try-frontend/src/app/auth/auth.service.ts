

export class Authservice{
    loggedIn()
    {
        return !!localStorage.getItem('token')
    }
    getToken()
    {
        return localStorage.getItem('token')
    }
}