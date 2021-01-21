import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";
import SEO from "../components/SEO";
import Img from "gatsby-image";
import styled from "styled-components";

const POST = styled.div`
	.section {
		&:first-child {
			@media (max-width: 767px) {
				margin-top: 0;
				padding-top: 0;
			}
		}
	}

	.text {
		a {
			text-decoration: underline;
		}
	}
`;

const TAGS = styled.div`
	padding: 12px 0;
`;

export default ({ data }) => {
	const post = data.mdx
	const imageSource = post.frontmatter.image.childImageSharp.fluid

	return (
		<Layout>
			<SEO
				title={`${data.site.siteMetadata.title} - ${post.frontmatter.title}`}
				description={post.frontmatter.description || post.excerpt || ''}
				image={imageSource.src}
			/>
			<POST className="container">
				<div className="section">
					<article className="card">
						<Img fluid={imageSource} />
						<h1>{post.frontmatter.title}</h1>
						<TAGS>
							{post.frontmatter.category.map((category, i) =>
								<Link className="tags" key={i} to={`/${category}/`}>{category}</Link>
							)}
						</TAGS>

						<div className="text">
							<MDXRenderer>{post.body}</MDXRenderer>
						</div>
					</article>
				</div>
			</POST>
		</Layout>
	)
}

export const query = graphql`
	query($slug: String!) {
		site {
			siteMetadata {
			  title
			}
		}
		mdx(fields: {slug: {eq: $slug } }) {
			body
			excerpt
			frontmatter {
				title
				category
				description
				image {
					childImageSharp {
						fluid(maxWidth: 1024) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			fields {
				slug
			}
		}
	}
`