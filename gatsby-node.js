const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const generateEventPages = async (graphql, createPage) => {
	const eventTemplate = path.resolve(`./src/templates/event.js`);
	const eventResult = await graphql(`
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}
	`);

	if (eventResult.errors) {
		throw eventResult.errors;
	}

	const events = eventResult.data.allMarkdownRemark.edges;

	events.forEach((event, index) => {
		const previous = index === events.length - 1 ? null : events[index + 1].node;
		const next = index === 0 ? null : events[index - 1].node;

		createPage({
			path: event.node.fields.slug,
			component: eventTemplate,
			context: {
				slug: event.node.fields.slug,
				previous,
				next,
			},
		});
	});
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	generateEventPages(graphql, createPage);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	const isMarkdownRemark = node.internal.type === 'MarkdownRemark';

	if (isMarkdownRemark) {
		const { sourceInstanceName } = getNode(node.parent);
		const value = createFilePath({ node, getNode });

		createNodeField({
			name: `slug`,
			node,
			value: `/${sourceInstanceName}${value}`,
		});
	}
};
