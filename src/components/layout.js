import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.css"

import Header from "./header";
import Kopimi from "./kopimi";

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
			<Header siteTitle={data.site.siteMetadata.title} />
			<hr />
			<div
				style={{
					margin: '0 auto',
					maxWidth: 960,
					padding: '0 1.0875rem 1.45rem',
				}}
			>
				<main>{children}</main>
				<footer>
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
