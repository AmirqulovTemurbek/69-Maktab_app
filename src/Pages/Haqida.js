import React from 'react';
import {BsAward, BsCameraVideo} from "react-icons/bs";
import {FiUsers} from "react-icons/fi";
import "./haqida.scss";
import {Link} from "react-router-dom";

const Haqida = () => {
    return (
        <>
            <section className="haqida">
                <div className="container haqida__container">
                    <div className="haqida__chap">
                        <img className="award" src="/images/haqida.jpg" alt="Error"/>
                    </div>
                    <div className="haqida__ong">
                        <h1>Yutuqlar</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi facere iure minus nisi
                            optio quidem, quis quod. Accusantium, beatae cupiditate deleniti dignissimos inventore
                            magnam ullam!</p>
                        <div className="haqida__cardlar">
                            <Link to="/kurslar" className="haqida__card">
                                <span className="haqida__icon">
                                    <BsCameraVideo className="icon"/>
                                </span>
                                <h3>10+</h3>
                                <p>Kurslar</p>
                            </Link>

                            <article className="haqida__card">
                                <span className="haqida__icon">
                                    <FiUsers className="icon"/>
                                </span>
                                <h3>1453+</h3>
                                <p>O`quvchilar</p>
                            </article>

                            <article className="haqida__card">
                                <span className="haqida__icon">
                                    <BsAward className="icon"/>
                                </span>
                                <h3>14</h3>
                                <p>Medallar</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Haqida;