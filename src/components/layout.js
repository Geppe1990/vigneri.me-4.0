import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/style.scss"

export default ({ children }) => {
	return (
		<React.Fragment>
			<Header />
            <div className="container mx-auto">
                {children}
            </div>
			<Footer />
		</React.Fragment>
	)
}
