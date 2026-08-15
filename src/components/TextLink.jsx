const TextLink = ({ href, children }) => (
  <a href={href} className="textlink hover:underline text-black dark:text-white font-semibold">
    <p>{children}</p>
  </a>
);

export default TextLink;
