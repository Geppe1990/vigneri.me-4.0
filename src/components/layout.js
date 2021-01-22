import React from "react";
import Header from "../components/header";

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
