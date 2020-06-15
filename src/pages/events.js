import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const EventsPage = ({ data }) => {
	const events = data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Events" />
			<h1>Events! - TODO more information on events on this page</h1>
			{events.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
				return (
					<article
						style={{
							margin: '3rem 0',
						}}
						key={node.fields.slug}
					>
						<header>
							<h3
								style={{
									margin: '0.5rem 0',
								}}
							>
								<Link to={node.fields.slug}>
									{title}
								</Link>
							</h3>
							<small>{node.frontmatter.date}</small>
						</header>
						<section>
							<p
								dangerouslySetInnerHTML={{
									__html: node.frontmatter.description ?? node.excerpt,
								}}
							/>
						</section>
					</article>
				)
			})}
		</Layout>
	);
};

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						description
					}
				}
			}
		}
	}
`;

export default EventsPage;
