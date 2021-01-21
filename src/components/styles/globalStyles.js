import { keyframes, createGlobalStyle } from 'styled-components';

export const colors = {
	"black": "#222",
	"white": "#f9fafb",
	"red": "#ff1744",
}

const shadow = {
	"heading": `1px 0 0 ${colors.black}, -1px 0 0 ${colors.black}, 0 1px 0 ${colors.black}, 0 -1px 0 ${colors.black}, 1px 1px ${colors.black}, -1px -1px 0 ${colors.black}, 1px -1px 0 ${colors.black}, -1px 1px 0 ${colors.black}`,
	"heading_reverse": `1px 0 0 ${colors.white}, -1px 0 0 ${colors.white}, 0 1px 0 ${colors.white}, 0 -1px 0 ${colors.white}, 1px 1px ${colors.white}, -1px -1px 0 ${colors.white}, 1px -1px 0 ${colors.white}, -1px 1px 0 ${colors.white}`,
}

const blink = keyframes`
  from, to {
	color: transparent;
  }

  50% {
	color: inherit;
  }
`;

export const beat = keyframes`
	from, to {
		transform: scale(1)
	}

	50% {
		transform:scale(1.25);
	}
`;

const GlobalStyles = createGlobalStyle`
	html, body {
		height: 100%;	
	}

	body {
		color: ${colors.black};
		background: ${colors.white};
		font-size: 16px;
		font-family: Source Code Pro;
		line-height: 1.5;
		margin: 0;
		padding: 0;
		

		@media (max-width: 767px) {
			font-size: 14px;
		}

		&.dark {
			background: linear-gradient(to right, #414345, #232526);

			.card {
				background: ${colors.black};
				color: ${colors.white};
			}

			em,
			.tags {
				color: ${colors.black};
				background: ${colors.white};
			}
		}
	}

	p {
		margin-bottom: 24px;
	}

	a {
		text-decoration: none;
		color: inherit;

		&:hover {
			text-decoration: underline;
		}
	}

	li {
		list-style: none;
		padding-bottom: 10px;
	}

	::-webkit-scrollbar {
		width: 6px;
	}

	::-webkit-scrollbar-track {
		background: ${colors.white};
	}

	::-webkit-scrollbar-thumb {
		background: ${colors.black};
		border-radius: 1px;
	}

	.text-center {
		text-align: center;
	}

	.container {
		position: relative;
		width: 90%;
		max-width: 1024px;
		margin: 0 auto;

		@media (max-width: 767px) {
			max-width: 100%;
			width: auto;
		}

		&-fluid {
			width: 100%;
			height: auto;
			position: relative;
			margin: 0;
			padding: 0;
		}
	}

	.section {
		display: flex;
		flex-direction: column;
		justify-content: center;

		@media (max-width: 767px) {
			&:first-child {
				margin-top: 0;
				padding-top: 0;
			}

			padding: 0;
			margin-top: 10px;
			margin-bottom: 10px;
		}
	}

	em,
	.tags {
		font-style: inherit;
		background: ${colors.black};
		color: ${colors.white};
		transition: color 0.6s ease-out, background 0.6s ease-out;
		padding: 0 2px;
	}

	.tags {
		margin-right: 10px;
		padding: 2px;
		text-decoration: none;

		&:hover {
			text-decoration: none;
		}
	}

	.card-container {
		display: flex;

		@media (max-width: 767px) {
			flex-direction: column;
		}

		.card--left {
			width: 33%;
			margin-right: 20px;
		}

		.card--right {
			width: 66%;
		}

		.card--left,
		.card--right {
			@media (max-width: 767px) {
				width: auto;
				margin-right: 10px;
			}
		}
	}

	.card {
		padding: 40px;
		margin-bottom: 40px;
		box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 16px;
		position: relative;
		background: rgb(255, 255, 255);
		border-radius: 16px;
		transition: color 0.2s ease-out, background 0.2s ease-out, box-shadow 0.2s ease-out;

		@media (max-width: 767px) {
			padding: 30px;
			margin-left: 10px;
			margin-right: 10px;
		}

		&:last-child {
			.card-container & {
				margin-bottom: 40px;
			}
		}

		.dark & {
			box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 16px;
		}
	}

	.button,
	button {
		font-size: 13px;
		border: 0;
		cursor: pointer;
		font-family: inherit;
		padding: 10px 15px;
		position: relative;
		border-radius: 100px;
		transition: color 0.2s ease-out, background 0.2s ease-out;
		outline: none;
		color: ${colors.black};
		border: 2px solid ${colors.black};
		background-color: transparent;

		&:hover {
			text-decoration: none;
			transform: scale(1.05);
			transition: transform .2s ease-in; 
		}

		.dark & {
			border-color: ${colors.white};
			color: ${colors.white};
		}
	}

	.typing::after {
		content: "_";
		line-height: initial;
		font-size: 0.8em;
		animation: 1s ${blink} step-end infinite;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: Source Sans Pro;
		margin: 0;
		padding: 0;
	}

	.hero {
		font-size: 4rem;

		@media (max-width: 767px) {
			font-size: 2rem;
		}
	}

	h1, .h1 { 
		font-size: 2rem; 
	}

	h2, .h2 { 
		font-size: 1.5rem; 
	}

	h3, .h3 { 
		font-size: 1.17rem; 
	}
	
	h4, .h4 { 
		font-size: 1.12rem; 
	}
	
	h5, .h5 { 
		font-size: .83rem; 
	}
	
	h6, .h6 { 
		font-size: .75rem; 
	}
	
	.heading {
		font-family: Source Sans Pro;
		font-weight: 100;
		text-shadow: ${shadow.heading};
		color: #ffffff;

		&--reverse {
			text-shadow: ${shadow.heading_reverse};
		}
	}

	.print {
		display: none;
	}

	@media print {
		.no-print, .no-print *
		{
			display: none !important;
		}

		.print, .print * {
			display: block;
		}
	}
`

export default GlobalStyles;