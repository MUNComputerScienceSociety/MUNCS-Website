const TextLink = ({ href, children }) => (
	<a href={href} className="textlink hover:underline text-blue-900"><p>{ children }</p></a>
);

export default TextLink;
