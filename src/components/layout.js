import React from "react";
import Header from "./header";
import Footer from "./footer";
import GlobalStyles from './styles/globalStyles';
import styled from "styled-components";

const SITEWRAPPER = styled.div`
	display: flex;
	flex-direction: column;
	height: 100vh;

	main {
		flex: 1 0 auto;
	}
`;

export default ({ children }) => {
	return (
		<React.Fragment>
			<GlobalStyles />
				<SITEWRAPPER>
					<Header />
					<main>
						<React.Fragment>
							{children}
						</React.Fragment>
					</main>
					<Footer />
				</SITEWRAPPER>
		</React.Fragment>
	)
}
