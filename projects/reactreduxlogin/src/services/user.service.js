import { authHeader } from '../helpers'

const config = JSON.stringify({
    apiUrl: 'http://localhost:3000'
})

const login = (username, password) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    return fetch(`${config.apiUrl}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('user', JSON.stringify(user))

            return user
        })
}

const logout = () => {
    localStorage.removeItem('user')
}

const getAll = () => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse)
}

const getById = (id) => {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    }

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
}

const register = (user) => {
    const requestOptions = {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch(`${config.apiUrl}/users/register`, requestOptions).then(handleResponse)
}


const update = (user) => {
    const requestOptions = {
        method: 'PUT',
        header: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    }

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse)
}

const _delete = (id) => {
    const requestOptions = {
        method: 'DELETE',
        header: authHeader()
    }

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse)
}

const handleResponse = (response) => {
    return response.text().then(text => {
        const data = text && JSON.parse(text)

        if (!response.ok) {
            if(response.status === 401){
                logout();
                window.location.reload(true)
            }

            const error = (data && data.message) || response.statusText
            return Promise.reject(error);
        }

        return data
    })
}

export const userService = {
    login,
    logout,
    register,
    getAll,
    getById,
    update,
    delete: _delete
}
