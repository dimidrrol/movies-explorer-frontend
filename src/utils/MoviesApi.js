const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

export const getFilms = () => {
    return fetch(`${BASE_URL}`, {
        headers: {
            'Accept': 'application/json'
        }
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        })
};