import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import '../styles/style.scss'

export default ({ children }) => {
	return (
		<React.Fragment>
			<Header />
				<React.Fragment>
					{children}
				</React.Fragment>
			<Footer />
		</React.Fragment>
	)
}
