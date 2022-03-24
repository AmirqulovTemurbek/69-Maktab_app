import React from 'react';
import "./tadbir.scss";

const Tadbirlar = () => {
    return (
        <>
            <div className="container">
                <div className="zakovat">
                    <h3>Zakovat Tanlovi</h3>
                    <p>Navoiy viloyati Xatirchi tumani XTBga qarashli 69-umumiy o‘rta ta'lim maktabida "Aniq fanlar
                        oyligi"
                        munosabati bilan matematika fani o'qituvchisi Rasulov Ahrorning 5 - "A" sinfda "Aralash sonlarni
                        qo'shish va ayirish" mavzusida o‘tgan bir soatlik ochiq darsidan fotolavhalar.</p>
                </div>
                <div>
                    <img className="tadbir" src="/images/zakovat.jpg" alt="Error"/>
                </div>

            </div>
            <div className=" container tadbir2">
                <div className="bobur">
                    <h3> Zahiriddin Muhammad Bobur tavalludining 539-yilligi</h3>
                    <p>Xatirchi tuman Xalq ta'limi bo'limiga qarashli 69-umumiy òrta ta'lim maktabida Zahiriddin Muhammad
                        Bobur tavalludining 539-yilligi munosabati bilan bo'lib o'tgan "Buyuk shoirni yod etib "nomli tadbir
                        jarayonidan lavhalar.</p>
                </div>
                <div className="tadbir_image">
                    <img src="/images/tadbir.jpg" alt="Error"/>
                    <img src="/images/tadbir1.jpg" alt="Error"/>
                </div>
            </div>
        </>
    );
};

export default Tadbirlar;