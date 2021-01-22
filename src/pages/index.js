import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/layout"
import SEO from "../components/SEO"
import "../styles/style.scss"

export default ({ data }) => {
	return (
		<Layout>
			<SEO
				title={data.site.siteMetadata.title}
				description={data.site.siteMetadata.description || ''}
				pathname={data.site.siteMetadata.url}
			/>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias vitae iste atque deserunt, odit nobis nemo, modi a laborum unde, quam asperiores voluptas harum sunt voluptates. Atque recusandae dignissimos accusantium!
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