import React from "react"
import { graphql } from "gatsby"
import SEO from "../../components/SEO"
import LayoutCv from "../../components/layout-cv";

const Cv = ({ data }) => {
	return (
        <React.Fragment>
            <SEO title={data.site.siteMetadata.title} />
            <LayoutCv language="eng"/>
        </React.Fragment>
	)
}

export const query = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`

export default Cv;
