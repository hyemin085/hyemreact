import {useEffect} from "react";

import QuoteList from "../components/quotes/QuoteList";
import useHttp from "../components/hooks/use-http";
import {getAllQuotes} from "../components/lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";

const DUMMY_QUOTES = [
  { id: 'q1', author: 'Hyem', text: '리액트는 어렵다!!!!' },
  { id: 'q2', author: '봉구', text: '노드는 어렵다!!!!' },
  { id: 'q3', author: '헹구', text: '리액트는 재미가있을까?' },
];


const AllQuotes = () => {

  const {sendRequest, status, data: loadedQuotes, error} = useHttp(
    getAllQuotes,
    true
  );

  useEffect(() => {
    sendRequest();
  },[sendRequest]);

  if (status === 'pending') {
    return(
      <div className='centered'>
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className='centered focused'>{error}</p>;
  }

  if (status === 'completed' && (!loadedQuotes || loadedQuotes.length === 0)) {
    return <NoQuotesFound />;
  }

  return(
    <QuoteList quotes={loadedQuotes} />
  )
};

export default AllQuotes;