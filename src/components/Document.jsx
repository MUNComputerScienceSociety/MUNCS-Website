import { format } from "date-fns";
import Card from "./Card.jsx";

const DOCS_URL_PREFIX = "https://www.cs.mun.ca/~csclub/executive-documents/";

const Document = ({ data: { path, time, type } }) => {
	const date = format(new Date(time), "MMMM do, yyyy");

	return (
		<a href={`${DOCS_URL_PREFIX}${path}`}>
			<Card>
				<p>
					Meeting {type}{" "}
					<span className="italic float-right opacity-50 dark:opacity-70">{date}</span>
				</p>
			</Card>
		</a>
	);
};

export default Document;
