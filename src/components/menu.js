import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Darkmode from "./dark-mode"; 
import styled from 'styled-components';

const NAV = styled.nav`
	display: flex;
	justify-content: space-between;
	padding: 20px;
`;

const LINK = styled(Link)`
	font-weight: bold;
	text-transform: uppercase;
	margin-right: 15px;
`;

export default () => {
	const data= useStaticQuery(
		graphql`
			query {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	)

	return (
		<NAV>
			<div>
				<span>
					<LINK to={`/`} className="heading--reverse">{`< ${data.site.siteMetadata.title} />`}</LINK>
				</span>
			</div>

			<div>
				<LINK to={`/mentoring/`} className="heading--reverse">Mentoring</LINK>
				{/* <LINK to={`/blog/`} className="heading--reverse">Blog</LINK> */}
				<LINK to={`/cv/`} className="heading--reverse">CV</LINK>
				<Darkmode />
			</div>
		</NAV>
	)
}