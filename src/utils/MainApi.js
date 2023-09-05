class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }

    register(name, email, password) {
        return fetch(`${this.url}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: this.headers,
            body: JSON.stringify({name, email, password})
        })
            .then(this._checkResponse)
    }

    authorize(email, password) {
        return fetch(`${this.url}/signin`, {
            method: 'POST',
            credentials: 'include',
            headers: this.headers,
            body: JSON.stringify({email, password})
        })
            .then(this._checkResponse)
            .then((data) => {
                localStorage.setItem('userId', data._id);
            })
    }

    logout() {
        return fetch(`${this.url}/signout`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this.headers
        })
            .then(this._checkResponse)
    }

    getUserInfo() {
        return fetch(`${this.url}/users/me`, {
            credentials: 'include',
            headers: this.headers
        })
            .then(this._checkResponse)
    }

    patchUser(name, email) {
        return fetch(`${this.url}/users/me`, {
            method: 'PATCH',
            credentials: 'include',
            headers: this.headers,
            body: JSON.stringify({
                'name': name,
                'email': email
            })
        })
            .then(this._checkResponse)
    }

    getMoviesInfo() {
        return fetch(`${this.url}/movies`, {
            credentials: 'include',
            headers: this.headers
        })
            .then(this._checkResponse)
    }

    postMovie(
        country,
        director,
        duration,
        year,
        description,
        image,
        trailerLink,
        nameRU,
        nameEN,
        thumbnail,
        movieId ) {
        return fetch(`${this.url}/movies`, {
            method: 'POST',
            credentials: 'include',
            headers: this.headers,
            body: JSON.stringify({
                'country': country,
                'director': director,
                'duration': duration,
                'year': year,
                'description': description,
                'image': image,
                'trailerLink': trailerLink,
                'nameRU': nameRU,
                'nameEN': nameEN,
                'thumbnail': thumbnail,
                'movieId': movieId
            })
        })
            .then(this._checkResponse)
    }

    deleteMovie(id) {
        return fetch(`${this.url}/movies/${id}`, {
            method: 'DELETE',
            credentials: 'include',
            headers: this.headers
        })
            .then(this._checkResponse)
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

export const api = new Api({
    url: 'http://localhost:3001',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});