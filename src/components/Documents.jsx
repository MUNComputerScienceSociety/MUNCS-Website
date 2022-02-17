import { useState, useEffect } from "react";
import fetchDocuments from "../utils/fetchDocuments";
import Document from "./Document";

export const LatestDocuments = () => {
  const [latestDocuments, setLatestDocuments] = useState();

  useEffect(() => {
    fetchDocuments().then((allDocuments) => {
      const sortedDocuments = allDocuments.sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      );
      setLatestDocuments(sortedDocuments.slice(0, 4));
    });
  }, []);

  if (latestDocuments === undefined) {
    return <p>...</p>;
  }

  return latestDocuments.map((document, index) => (
    <Document key={index} data={document} />
  ));
};

export const AllDocuments = () => {
  const [allDocuments, setAllDocuments] = useState();

  useEffect(() => {
    fetchDocuments().then((allDocuments) => {
      const sortedDocuments = allDocuments.sort(
        (a, b) => new Date(b.time) - new Date(a.time)
      );
      setAllDocuments(sortedDocuments);
    });
  }, []);

  if (allDocuments === undefined) {
    return <p>...</p>;
  }

  return allDocuments.map((document, index) => (
    <Document key={index} data={document} />
  ));
};
