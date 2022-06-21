import { useState } from "react";
import "./Card.css";
import ImgTeste from "../../Img/eupo.jpg";

export const Card = ({ nome, time }) => {

    const [modal, setModal] = useState(false);

    function abrirModal() {
        setModal(!modal)
    }

    function fecharModal() {
        setModal(modal === false)
    }

    return (
        <>
            <div className='card' onClick={() => { abrirModal() }}>
                <h3>{nome}</h3>
                <p>{time}</p>
            </div>
            {modal && (
                <section className="modal-open">
                    <header className="contain-header">
                        <img src={ImgTeste} className="img-perfil" />
                        <h3>{nome}</h3>
                        <div className="fechar-modal" onClick={() => { fecharModal() }}>
                            <p>x</p>
                        </div>
                    </header>
                    <nav className="navigation">
                        <ul>
                            <li>Idade: 22 anos | Rio de Janeiro - RJ</li>
                            <p>

                            </p>
                        </ul>
                    </nav>
                </section>
            )}
        </>
    )
}

