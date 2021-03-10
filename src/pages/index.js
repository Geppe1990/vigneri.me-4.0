import React from 'react'
import { graphql } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/SEO'
import '../styles/pages/index.scss'

const Index = ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.index.siteMetadata.title}
				description={data.index.siteMetadata.description || ''}
				pathname={data.index.siteMetadata.url}
			/>
			<div id='homepage'>
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
