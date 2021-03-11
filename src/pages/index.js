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
				{/* INTRO */}
				<div id='intro' className='flex items-center h-screen w-screen bg-black text-white p-10'>
					<div>
						<h1 className='text-7xl'>Vigneri Giuseppe</h1>
						<h3 className='text-4xl'>Web Developer</h3>
						<p className='max-w-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nisi voluptatum facilis molestiae? Harum nobis architecto voluptates! Possimus inventore illum culpa quaerat nam eaque labore sunt amet libero. Qui, beatae!</p>
					</div>
				</div>
				{/* ABOUT */}
				<div id="about" className='w-screen bg-black text-white p-10'>
					<h2 className='text-center text-3xl uppercase'>About me</h2>
					<div className='flex items-top justify-between w-full'>
						<span>pippo</span>
						<span>pippo</span>
						<span>pippo</span>
						<span>pippo</span>
					</div>
				</div>
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
