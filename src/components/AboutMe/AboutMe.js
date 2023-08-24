import './AboutMe.css';
import Title from '../Title/Title';
import React from 'react';
import photo from '../../images/photo.jpeg';

function AboutMe(props) {
    return (
        <section className='about-me'>
            <Title title='Студент' />
            <div className='about-me__info'>
                <h2 className='about-me__name'>Виталий</h2>
                <h3 className='about-me__profession'>Фронтенд-разработчик, 30 лет</h3>
                <p className='about-me__about'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
                    «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                <a href='https://github.com/dimidrrol' target='_blank' rel='noopener noreferrer' className='about-me__github link-hover'>Github</a>
                <img src={photo} alt='Фото' className='about-me__photo' />
            </div>
        </section>
    )
}

export default AboutMe;