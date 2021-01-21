import React from "react"
import { Link } from "gatsby";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaHeart } from 'react-icons/fa'
import styled from 'styled-components';
import { colors, beat } from '../components/styles/globalStyles';

const FOOTER = styled.footer`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #222;
    padding: 12px;
    flex-shrink: 0;
    transition: color 0.6s ease-out, background 0.6s ease-out, border-color 0.6s ease-out;

    a {
        text-shadow: unset;
    }

    .dark & {
        background: inherit;
        color: ${colors.white};
        border: none;
    }

    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        margin: 0;
    }

    li {
        list-style: none;
        margin: 0 7px;
        font-size: 14px;
        padding-bottom: 0;
    }

    small {
        display: block;
        font-size: 14px;
        text-align: center;

        @media (max-width: 767px) {
            font-size: 12px;
        }
    }

    .social {
        @media (max-width: 767px) {
			display: none;
		}
    }
    
    .icon-heart {
        color: ${colors.red};
        animation:${beat} 1.5s ease infinite;
    }


`;

export default () => {
    return (
        <FOOTER className="no-print">
            <ul className="social">
                <li>
                    <a href="https://www.linkedin.com/in/giuseppevigneri/">
                        <FaLinkedin />&nbsp;
                         <span>LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Geppe1990">
                    <FaGithub />&nbsp;
                         <span>Github</span>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/ioSonoGeppe">
                        <FaTwitter />&nbsp;
                         <span>Twitter</span>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/geppegram/">
                        <FaInstagram />&nbsp;
                         <span>Instagram</span>
                    </a>
                </li>
            </ul>
            <small>
                {new Date().getFullYear()} - Made with <FaHeart className="icon-heart" /> and Gatsby by Vigneri Giuseppe - <Link to={`/privacy/`} className="heading--reverse">Privacy</Link>

            </small>
        </FOOTER>
	)
}