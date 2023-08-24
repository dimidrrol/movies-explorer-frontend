import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <h2 className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <div className='footer__info'>
                <p className='footer__copyright'>&#169; 2023</p>
                <div className='footer__links'>
                    <a href='https://practicum.yandex.ru/' target='_blank' rel='noopener noreferrer' className='footer__link link-hover'>Яндекс.Практикум</a>
                    <a href='https://github.com/dimidrrol' target='_blank' rel='noopener noreferrer' className='footer__link link-hover'>Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;