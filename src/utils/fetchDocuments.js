const DOCS_JSON = "https://www.cs.mun.ca/~csclub/executive-documents/docs.json";

const fetchDocuments = async () => {
    const resp = await fetch(DOCS_JSON);
    return await resp.json();
};

export default fetchDocuments;
