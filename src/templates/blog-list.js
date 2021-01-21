import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import PostExcerpt from "../components/post-excerpt";
import SEO from "../components/SEO";
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

const BLOG = styled.div`
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


	return (
		<Layout>
			<SEO
				title={`${data.site.siteMetadata.title} - Blog`}
			/>
			<BLOG className="container">
				<div className="section">

					<div className="card">
						<H1 className="hero">Blog {data.site.siteMetadata.title}</H1>
					</div>
					<div>
						<div className="card">
							<div>
								{data.allMdx.edges.map(({ node }) => (
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
								))}
							</div>
						</div>
						<PAGINATION className="card">
							{!isFirst && (
								<Link
									to={`/blog/${prevPage}`} rel="next">←</Link>
							)}
							{Array.from({ length: numPages }, (_, i) => (
								<Link 
									key={`pagination-number${i + 1}`} to={`/blog/${i === 0 ? "" : i + 1}`}>
								{i + 1}
								</Link>
							))}
							{!isLast && (
								<Link 
								to={`/blog/${nextPage}`} rel="next">→</Link>
							)}
						</PAGINATION>
					</div>
				</div>
			</BLOG>
		</Layout>
	)
}

export const query = graphql`
	query blogListQuery($skip: Int!, $limit: Int!) {
		site {
			siteMetadata {
				title
			}
		}
		allMdx(
			sort: { fields: [frontmatter___date], order: DESC }
			limit: $limit
			skip: $skip
		  ) {
			totalCount
			edges {
				node {
					id
					frontmatter {
						category
						title
						date(formatString: "DD MMMM, YYYY", locale: "it")
						image {
							childImageSharp {
								fluid(maxWidth: 800) {
									...GatsbyImageSharpFluid
									src
								}
							}
						}
					}
					fields {
						slug
					}
					excerpt
					timeToRead
				}
			}
		}
	}
`