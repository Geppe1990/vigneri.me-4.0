import React from "react"
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby"
import "../styles/components/menu.scss"

export default () => {
	const { site } = useStaticQuery(
		graphql`
			query SocialUsernames {
			site {
				siteMetadata {
					menuLinks {
						name
						link
					}
				}
			}
		}
	`)

	return(
		<nav className="flex items-center bg-gray-800 p-3 flex-wrap">
			<Link to="#" className="p-2 mr-4 inline-flex items-center">
				<span className="text-xl text-white font-bold uppercase tracking-wide">Talwind CSS</span>
			</Link>
			<button
				className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
				data-target="#navigation">
				<i className="material-icons">menu</i>
			</button>
			
			<div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
				<ul
					className="list-none lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
					{site.siteMetadata.menuLinks.map(link => (
						<li
						key={link.name}
						>
							<Link 
								className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
								to={link.link}
							>
								{link.name}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	)
}

const query = graphql`
	query Menu {
		site {
			siteMetadata {
				menuLinks {
					name
					link
				}
			}
		}
	}
`