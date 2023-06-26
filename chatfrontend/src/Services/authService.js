import API from './api'

const AuthService = {
    login: (data) => {
        return API.post('/login', data)
            .then(({ data }) => {
                setHeadersAndStorage(data)
                return data
            })
            .catch(err => {
                console.log("Auth service err", err);
                throw err
            })
    }
}

export default AuthService