import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const EventsPage = ({ data }) => {
	const events = data.allMarkdownRemark.edges

	return (
		<Layout>
			<SEO title="Events" />
			<h1>Events!</h1>
			{events.map(({ node }) => {
				const title = node.frontmatter.title || node.fields.slug;
				return (
					<article key={node.fields.slug}>
						<header>
							<h3>
								<Link to={node.fields.slug}>
									{title}
								</Link>
							</h3>
							<small>{node.frontmatter.date}</small>
						</header>
						<section>
							<p
								dangerouslySetInnerHTML={{
									__html: node.excerpt,
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
					}
				}
			}
		}
	}
`;

export default EventsPage;
