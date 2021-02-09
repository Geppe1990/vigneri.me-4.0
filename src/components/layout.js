import React from "react";
import Header from "../components/header";
import "../styles/style.scss"

export default ({ children }) => {
	return (
		<React.Fragment>
			<Header />
            <div className="container mx-auto">
                {children}
            </div>
		</React.Fragment>
	)
}
