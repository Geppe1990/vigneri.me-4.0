import React from "react";

export default ({ children }) => {
	return (
		<React.Fragment>
            <div className="container">
                {children}
            </div>
		</React.Fragment>
	)
}
