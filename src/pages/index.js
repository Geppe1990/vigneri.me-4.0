import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/SEO"
import "../styles/pages/index.scss"

export default ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description || ''}
				pathname={data.site.siteMetadata.url}
			/>
			<div id="homepage" className="flex justify-left items-center">
				<div className="flex-1">
					<h2>Giuseppe Vigneri</h2>
					<h1>Creazione siti web Ferrara</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quasi praesentium dicta provident repudiandae similique reiciendis fugit corporis possimus amet mollitia vitae ab at numquam, eius in? Adipisci, neque fuga.
					</p>
				</div>
				<div className="flex-1"></div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	query MyQuery {
		site {
			siteMetadata {
				title
				description
				url
			}
		}
	}
`