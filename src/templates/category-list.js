import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import PostExcerpt from "../components/post-excerpt"
import SEO from "../components/SEO"
import styled from "styled-components";
import { colors } from '../components/styles/globalStyles';

const PAGINATION = styled.div`
	display: flex;
	justify-content: center;
	
	&.card {
		padding: 10px 40px;
	}

	a {
		margin: 0 5px;

		&:hover {
			background: #222;
			color: ${colors.white};				
		} 
	}

	[aria-current="page"] {
		background: #222;
		color: ${colors.white};
		transition: color 0.6s ease-out, background 0.6s ease-out;
		
		.dark & {
			background-color: ${colors.white};
			color: #222;
		}
	}
`;

const H1 = styled.h1`
	margin-bottom: 20px;
`;

const CATEGORY = styled.div`
	.section {
		&:first-child {
			@media (max-width: 767px) {
				margin-top: 0;
				padding-top: 0;
			}
		}
	}

	.hero {
		margin: 0;
	}
`;

export default ({ data, pageContext }) => {
	const { currentPage, numPages } = pageContext;
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
	const nextPage = (currentPage + 1).toString();
	const category = pageContext.category;

	return (
		<Layout>
			<SEO
				title={`${data.site.siteMetadata.title} - ${category}`}
			/>
			<CATEGORY className="container">
				<div className="section">
					<div className="card">
						<H1 className="hero">{category}</H1>
					</div>
					<div>
						<div className="card">
							<div>
								{data.allMdx.edges.map(({ node }) => {
									return (
										<PostExcerpt
											key={node.id}
											id={node.id}
											img={node.frontmatter.image.childImageSharp.fluid.src}
											title={node.frontmatter.title}
											excerpt={node.excerpt}
											slug={node.fields.slug}
											category={node.frontmatter.category}
											date={node.frontmatter.date}
										/>
									)
								})}
							</div>
						</div>
						<PAGINATION className="card">
							{!isFirst && (
								<Link
									to={`/${category}/${prevPage}`} rel="next">←</Link>
							)}
							{Array.from({ length: numPages }, (_, i) => (
								<Link
									key={`pagination-number${i + 1}`} to={`/${category}/${i === 0 ? "" : i + 1}`}>
								{i + 1}
								</Link>
							))}
							{!isLast && (
								<Link
									to={`/${category}/${nextPage}`} rel="next">→</Link>
							)}
						</PAGINATION>
					</div>
				</div>
			</CATEGORY>
		</Layout>
)}

export const query = graphql`
	query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { frontmatter: { category: { in: [$category] } } }
			limit: $limit
			skip: $skip
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					excerpt
					frontmatter {
						title
						date(formatString: "DD MMMM, YYYY", locale: "it")
						category
						image {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
									src
								}
							}
						}
					}
				}
			}
		}
	}
`