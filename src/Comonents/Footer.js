import React from 'react';
import {Link} from "react-router-dom";
import "./footer.scss";
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container footer__container">
                    <div className="footer__1">
                        <Link to="/" className="
                         font-weight-bold">69-MAKTAB</Link>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, illo?</p>
                    </div>
                    <div className="footer__2">
                        <Link to="/" className="
                         font-weight-bold yangilik">Yangiliklar</Link>
                        <ul>
                            <li><Link to="/haqida">Biz haqimizda</Link></li>
                            <li><Link to="/haqida">Kurslar</Link></li>
                            <li><Link to="/haqida">Tadbirlar</Link></li>
                            <li><a href="#">Zakovat Tanlovi</a></li>
                            <li><a href="#">Bobur 539-yilligi</a></li>
                        </ul>
                    </div>
                    <div className="footer__3">
                        <h4>Biz Haqimizda</h4>
                        <p>biz iste'dodli talabalar va noyob startapni birlashtirishga yordam berishni xohlaymiz</p>
                    </div>
                    <div className="footer__4">
                        <h4>Kontakt</h4>
                        <div>
                            <p>+998934598777</p>
                            <p>maktab69@gmail.com</p>

                        </div>
                        <ul className="footer__icons">
                            <li><a href="#"><BsFacebook/></a></li>
                            <li><a href="#"><BsInstagram/></a></li>
                            <li><a href="#"><BsTwitter/></a></li>
                            <li><a href="#"><BsLinkedin/></a></li>
                        </ul>
                    </div>
                </div>
            </footer>


            <div className="footer_copy">
                <small><span>&copy; {new Date().getFullYear()} 69-Maktab</span></small>
            </div>
        </>
    );
};

export default Footer;