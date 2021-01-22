/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: "vigneri.me",
		titleTemplate: "Vigneri Giuseppe - Front-end Web Developer",
		description: "Sono uno sviluppatore Web e Software specializzato in Javascript, React e Python",
		url: "https://www.vigneri.me",
		siteUrl: "https://www.vigneri.me",
		defaultTitle: "Vigneri Giuseppe - Front-end Web Developer",
	},
	plugins: [
		'gatsby-plugin-netlify',
		'gatsby-remark-images',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`,
				maxWidth: 1920,
				linkImagesToOriginal: false,
				withWebp: true,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: 'gatsby-plugin-mdx',
			options: {
				extensions: [".mdx", ".md"],
				gatsbyRemarkPlugins: [
					'gatsby-remark-copy-linked-files',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1920,
							linkImagesToOriginal: false,
							withWebp: true,
						},
					},
				],
			},
		},
		{
			resolve: "gatsby-plugin-page-progress",
			options: {
				includePaths: ["/", {
					regex: "^/blog/*"
				}],
				excludePaths: ["/"],
				height: 3,
				prependToBody: false,
				color: `#ef5350`
			}
		},
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-mdx',
		'gatsby-plugin-sitemap',
		{
			resolve: 'gatsby-plugin-sass',
			options: {
				postCssPlugins: [
					require("tailwindcss"),
					require("./tailwind.config.js"),
				]
			}
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'vigneri.me',
				short_name: 'vigneri',
				start_url: '/',
				background_color: '#ef5350',
				theme_color: '#ef5350',
				display: 'standalone',
				icon: 'src/assets/images/icon.png',
				icons: [{
						src: `/favicons/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/favicons/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
				crossOrigin: `use-credentials`,
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-dark-mode',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `UA-137431027-1`,
				head: true,
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
				{
				  site {
					siteMetadata {
						title
						description
						siteUrl
						site_url: siteUrl
					}
				  }
				}
			  `,
				feeds: [{
					serialize: ({
						query: {
							site,
							allMdx
						}
					}) => {
						return allMdx.edges.map(edge => {
							return Object.assign({}, edge.node.frontmatter, {
								description: edge.node.excerpt,
								date: edge.node.frontmatter.date,
								url: site.siteMetadata.siteUrl + edge.node.fields.slug,
								guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
								custom_elements: [{
									"content:encoded": edge.node.html
								}],
							})
						})
					},
					query: `
					{
						allMdx(
							sort: { order: DESC, fields: [frontmatter___date] },
					  	) {
							edges {
								node {
									excerpt
									html
									fields { slug }
									frontmatter {
										title
										date
									}
								}
							}
						}
					}
					`,
					output: "/rss.xml",
					title: "Vigneri Giuseppe RSS Feed",
				}, ],
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'https://www.vigneri.me',
				sitemap: 'https://www.vigneri.me/sitemap.xml',
				policy: [{
					userAgent: '*',
					allow: '/'
				}]
			}
		}
	],
}