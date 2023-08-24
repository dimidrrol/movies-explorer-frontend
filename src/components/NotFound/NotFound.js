import './NotFound.css';

function NotFound() {
    return (
        <main className='not-found'>
            <h2 className='not-found__error'>404</h2>
            <p className='not-found__description'>Страница не найдена</p>
            <a href='/' className='not-found__link link-hover'>Назад</a>
        </main>
    )
}

export default NotFound;