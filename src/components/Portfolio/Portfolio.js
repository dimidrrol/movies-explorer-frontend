import './Portfolio.css';

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <div className='portfolio__links'>
                <a href='https://github.com/dimidrrol/how-to-learn' target='_blank' rel='noopener noreferrer' className='portfolio__link link-hover'>Статичный сайт</a>
                <a href='https://github.com/dimidrrol/russian-travel' target='_blank' rel='noopener noreferrer' className='portfolio__link link-hover'>Адаптивный сайт</a>
                <a href='https://github.com/dimidrrol/react-mesto-api-full-gha' target='_blank' rel='noopener noreferrer' className='portfolio__link link-hover'>Одностраничное приложение</a>
            </div>
        </section>
    )
}

export default Portfolio;