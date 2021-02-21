import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/SEO"
import INTRO from "../components/intro"
import "../styles/pages/index.scss"
import accenti from "../assets/images/accenti.png"

export default ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description || ''}
				pathname={data.site.siteMetadata.url}
			/>
			<div id="homepage">
				<div 
					style={{backgroundImage: `url(${accenti})` }} 
					id="hero" 
					className="bg-no-repeat bg-cover bg-center"
					// style={{backgroundImage: `${accenti}`}}
				>
					<div className="container mx-auto">
						<div className="flex justify-left items-center h-full">
							<div className="flex-1">
								<h2 className="h1">Giuseppe Vigneri</h2>
								<h1>Creazione siti web Ferrara</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quasi praesentium dicta provident repudiandae similique reiciendis fugit corporis possimus amet mollitia vitae ab at numquam, eius in? Adipisci, neque fuga.
								</p>
							</div>
							<div className="flex-1"></div>
						</div>
					</div>
				</div>
				<INTRO />
				{/* PORTFOLIO
				SERVIZI
				TESTIMONIALS
				CONTATTI
				ARTICOLI */}
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