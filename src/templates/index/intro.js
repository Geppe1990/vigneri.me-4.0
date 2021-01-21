import React from "react"
import styled from "styled-components";

const INTRO = styled.div`
    .hero {
        > span {
            display: block;

            @media (max-width: 767px) {
                font-size: 1.5rem;
            }
        }
    }
`;

export default () => {
	return (
        <INTRO className="section">
            <div className="card">
                <h1 className="hero"><em>Giuseppe Vigneri</em>, <span className="typing">Front-end Web Developer</span></h1>
                <p>Ciao e benvenuto nel mio sito! Mi chiamo Giuseppe e sono uno sviluppatore Web e Software. </p>
                <p>Le mie skills spaziano da <em>Javascript</em> a <em>React</em>, <em>PHP</em>, <em>SASS</em>, <em>Python</em>, <em>GIT</em> e ovviamente <em>HTML5</em> e <em>CSS3</em>. Lavoro seguendo una metodologia di lavoro Kanban / Agile.</p>
                <p>Mi sono specializzato nella creazione di siti web ed ecommerce nel segmento Luxury Fashion, lavorando per brand di tiratura nazionale e mondiale.</p>
                <p><em>Al momento sono disponibile per progetti a medio-breve termine</em></p>
            </div>
        </INTRO>
	)
}
