import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/SEO'
import INTRO from '../components/intro'
import PORTFOLIO from '../components/portfolio'
import '../styles/pages/index.scss'
import accenti from '../assets/images/portfolio/accenti.png'
import { portfolioLabels } from '../config/portfolio';

const Index = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.index.siteMetadata.title}
				description={data.index.siteMetadata.description || ''}
				pathname={data.index.siteMetadata.url}
			/>
			<div id='homepage'>
				<div 
					style={{backgroundImage: `url(${accenti})` }} 
					id='hero' 
					className='bg-no-repeat bg-cover bg-center'
				>
					<div className='container mx-auto'>
						<div className='flex justify-left items-center h-full'>
							<div className='flex-1'>
								<h2 className='h1'>Giuseppe Vigneri</h2>
								<h1>Creazione siti web Ferrara</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio quasi praesentium dicta provident repudiandae similique reiciendis fugit corporis possimus amet mollitia vitae ab at numquam, eius in? Adipisci, neque fuga.
								</p>
							</div>
							<div className='flex-1'></div>
						</div>
					</div>
				</div>
				<INTRO />
				<PORTFOLIO portfolioImages={data.portfolio} labels={portfolioLabels} />
				{/* PORTFOLIO
				SERVIZI
				TESTIMONIALS
				CONTATTI
				ARTICOLI */}
			</div>
		</Layout>
	)
}

export default Index;

export const indexQuery = graphql`
	query {
		index: site {
			siteMetadata {
				title
				description
				url
			}
		}
		portfolio: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {eq: "assets/images/portfolio"}}) {
			edges {
	  			node {
					id
					name
					publicURL
	  			}
			}
  		}
	}
`
