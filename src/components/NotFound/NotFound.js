import './NotFound.css';

function NotFound() {
    return (
        <section className='not-found'>
            <h2 className='not-found__error'>404</h2>
            <p className='not-found__description'>Страница не найдена</p>
            <button type='button' className='not-found__button button-hover'>Назад</button>
        </section>
    )
}

export default NotFound;