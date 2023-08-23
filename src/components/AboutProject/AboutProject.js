import './AboutProject.css';
import Title from '../Title/Title';

function AboutProject() {
    return (
        <section id='about-project' className='about-project'>
            <Title title='О проекте' />
            <div className='about-project__cards'>
                <div className='about-project__card'>
                    <h3 className='about-project__card-title'>Дипломный проект включал 5 этапов</h3>
                    <p className='about-project__card-description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
                </div>
                <div className='about-project__card'>
                    <h3 className='about-project__card-title'>На выполнение диплома ушло 5 недель</h3>
                    <p className='about-project__card-description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
                </div>
            </div>
            <div className='about-project__roadmap'>
                <div className='about-project__backend'>
                    <p className='about-project__time'>1 неделя</p>
                    <p className='about-project__stage'>Back-end</p>
                </div>
                <div className='about-project__frontend'>
                    <p className='about-project__time'>4 недели</p>
                    <p className='about-project__stage'>Front-end</p>
                </div>
            </div>
        </section>
    )
}

export default AboutProject;