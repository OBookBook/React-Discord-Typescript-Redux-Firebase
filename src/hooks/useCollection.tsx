import {
  Query,
  query,
  collection,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const q: Query<DocumentData> = query(collection(db, data)); // https://firebase.google.com/docs/firestore/query-data/listen?hl=ja

  useEffect(() => {
    onSnapshot(q, (quetySnapshot) => {
      const channelResults: Channels[] = [];
      quetySnapshot.docs.forEach((doc) => {
        channelResults.push({
          id: doc.id,
          channel: doc.data(),
        });
      });
      setDocuments(channelResults);
    });
  }, []);

  return { documents };
};

export default useCollection;
