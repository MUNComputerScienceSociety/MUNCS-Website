import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css"

import Header from "./header";
import Kopimi from "./kopimi";
import Octocat from "./octocat";

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
  `);

	return (
		<>
			<Octocat />
			<Header siteTitle={data.site.siteMetadata.title} />
			<div
				style={{
					margin: '0 auto',
					maxWidth: 960,
					padding: '0 1.0875rem 1.45rem',
				}}
			>
				<hr
					style={{
						margin: '0 0 2rem 0',
					}}
				/>
				<main>{children}</main>
				<footer
					style={{
						margin: '2.25rem 0 0 0',
					}}
				>
					<Kopimi />{new Date().getFullYear()}
				</footer>
			</div>
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
