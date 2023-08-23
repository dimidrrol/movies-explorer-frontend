import promo_image from '../../images/promo-image.png';
import './Promo.css';

function Promo() {
    return (
        <section className='promo'>
            <h2 className='promo__title'>Учебный проект студента факультета Веб-разработки.</h2>
            <h3 className='promo__subtitle'>Листайте ниже, чтобы узнать больше про этот проект и его создателя.</h3>
            <a href='#about-project' className='promo__link link-hover'>Узнать больше</a>
            <img className='promo__image' alt='Веб глобус' src={promo_image} />
        </section>
    )
}

export default Promo;