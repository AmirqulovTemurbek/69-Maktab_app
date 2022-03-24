import React from 'react';

const Kurs = () => {
    return (
        <>
            <section className="courses">
                <h2>Bizning Mashxur Kurslar</h2>
                <div className="container courses__container">
                    <article className="course">
                        <div className="course__image">
                            <img src="/images/matematika.jpg" alt="Error"/>
                        </div>
                        <div className="course__info">
                            <h4>Biologiya fani</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum, odio. Est inventore
                                non quidem!</p>
                            <a href="#" className="btn btn-primary">Ma`lumot</a>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course__image">
                            <img src="/images/programming.jpg" alt="Error"/>
                        </div>
                        <div className="course__info">
                            <h4>Biologiya fani</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum, odio. Est inventore
                                non quidem!</p>
                            <a href="#" className="btn btn-primary">Ma`lumot</a>
                        </div>
                    </article>

                    <article className="course">
                        <div className="course__image">
                            <img src="/images/fizika.jpg" alt="Error"/>
                        </div>
                        <div className="course__info">
                            <h4>Biologiya fani</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus earum, odio. Est inventore
                                non quidem!</p>
                            <a href="#" className="btn btn-primary">Ma`lumot</a>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
};

export default Kurs;