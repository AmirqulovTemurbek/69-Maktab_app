import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";




const Yangiliklar = () => {


    // const savollar  = document.querySelectorAll(`.savol`);
    // savollar.forEach(savol => {
    //     savol.addEventListener('click', () => {
    //         savol.classList.toggle('ochish')
    //
    //         //icon
    //         const icon = savol.querySelector('.savol__icon');
    //         if (icon.className === 'plus-icon'){
    //             <AiOutlinePlus/>
    //         } else {
    //             <AiOutlineMinus/>
    //         }
    //     })
    // })
    //

    return (
        <>
            <header>
                <div className="container header__container">
                    <div className="header__left">
                        <h1>Toshkent 69-maktab</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor est id inventore minima nemo
                            officiis omnis porro quis quo sunt?</p>
                        <Link to="/qabul" className="btn btn-primary">Qabul qilish</Link>
                    </div>
                    <div className="header__right">
                        <div className="header__right-image">
                            <img className="maktab69" src="/images/maktab69.jpg" alt="69-Maktab"/>
                        </div>
                    </div>
                </div>
            </header>

            <section className="categories">
                <div className="container categories__container">
                    <div className="categories__left">
                        <h1>Fanlar Olimpiadasi</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut commodi cupiditate delectus
                            deleniti, dolor dolore dolorem doloremque explicabo fugiat magnam maiores quis reiciendis
                            rem repellat sunt, veritatis voluptatem.</p>
                        <Link to="/olimpiada" className="btn">Ma`lumotlar</Link>
                    </div>
                    <div className="categories__right">
                        <article className="category">
                            <h5>Matematika</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum cumque fugit.</p>
                        </article>

                        <article className="category">
                            <h5>Matematika</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum cumque fugit.</p>
                        </article>

                        <article className="category">
                            <h5>Matematika</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum cumque fugit.</p>
                        </article>

                        <article className="category">
                            <h5>Matematika</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum cumque fugit.</p>
                        </article>

                        <article className="category">
                            <h5>Matematika</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum cumque fugit.</p>
                        </article>

                        <article className="category">
                            <h5>Matematika</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cum cumque fugit.</p>
                        </article>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Yangiliklar;








// <section className="savollar">
//     <div className="container savol__container">
//         <article  className="savol">
//             <div className="savol__icon">
//                 <AiOutlinePlus/>
//             </div>
//             <div className="savol__javob">
//                 <h4>Kurslar haqida malumot qayerdan bilsam bo`ladi?</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus ea illum
//                     maiores obcaecati quam quia quisquam ratione vel veniam!</p>
//             </div>
//         </article>
//         <article  className="savol">
//             <div className="savol__icon">
//                 <AiOutlinePlus className="plus-icon"/>
//             </div>
//             <div className="savol__javob">
//                 <h4>Kurslar haqida malumot qayerdan bilsam bo`ladi?</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus ea illum
//                     maiores obcaecati quam quia quisquam ratione vel veniam!</p>
//             </div>
//         </article>
//         <article  className="savol">
//             <div className="savol__icon">
//                 <AiOutlinePlus/>
//             </div>
//             <div className="savol__javob">
//                 <h4>Kurslar haqida malumot qayerdan bilsam bo`ladi?</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus ea illum
//                     maiores obcaecati quam quia quisquam ratione vel veniam!</p>
//             </div>
//         </article>
//         <article  className="savol">
//             <div className="savol__icon">
//                 <AiOutlinePlus/>
//             </div>
//             <div className="savol__javob">
{/*                <h4>Kurslar haqida malumot qayerdan bilsam bo`ladi?</h4>*/}
{/*                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores doloribus ea illum*/}
{/*                    maiores obcaecati quam quia quisquam ratione vel veniam!</p>*/}
{/*            </div>*/}
{/*        </article>*/}
{/*    </div>*/}
{/*</section>*/}