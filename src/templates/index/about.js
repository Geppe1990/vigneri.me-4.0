import React from "react"
import styled from "styled-components";

const ABOUT = styled.ul`
    display: flex;
    flex-wrap: wrap;

    li {
        padding: 0 10px 0 0;
    }
`;

export default () => {
	return (
        <div className="section">
            <div className="card">
                <h2 className="heading text-center hero">About me</h2>
                <div>
                    <h3 className="h1">Social</h3>
                    <ABOUT>
                        <li><a href="mailto:geppe1990@gmail.com">Mail</a></li>
                        <li><a href="https://github.com/Geppe1990/">Github</a></li>
                        <li><a href="https://t.me/geppegram">Telegram</a></li>
                        <li><a href="https://www.instagram.com/geppegram">Instagram</a></li>
                        <li><a href="https://www.linkedin.com/in/giuseppevigneri/">LinkedIn</a></li>
                        <li><a href="https://www.facebook.com/Giuseppe.geppe.vigneri">Facebook</a></li>
                    </ABOUT>
                </div>
                
                <div>
                    <h3 className="h1">Skills</h3>
                    <ABOUT>
                        <li>Javascript</li>
                        <li>ReactJS</li>
                        <li>nodeJS</li>
                        <li>PHP</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>Webpack</li>
                        <li>Gulp/Grunt</li>
                        <li>Bootstrap</li>
                        <li>GIT</li>
                    </ABOUT>
                </div>
                
                <div>
                    <h3 className="h1">Clients</h3>
                    <ABOUT>
                        <li>Yoox</li>
                        <li>Valentino</li>
                        <li>Groupama</li>
                        <li>Città di Ravenna</li>
                        <li>Regione Toscana</li>
                        <li>HERA</li>
                    </ABOUT>
                </div>
                
                <div>
                    <h3 className="h1">Tools</h3>
                    <ABOUT>
                        <li>Visual Studio Code</li>
                        <li>Github</li>
                        <li>Adobe Photoshop</li>
                        <li>Sketch</li>
                        <li>Bash</li>
                        <li>Google Chrome</li>
                    </ABOUT>
                </div>
            </div>
        </div>
	)
}