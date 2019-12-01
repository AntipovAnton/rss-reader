import * as React from 'react'
import './rssFeed.scss';
import News from 'components/News/News';

const RssFeed = ({rss}) => {
    const [currentPage, setCurrentPage] = React.useState(1);
    const newsPerPage = 3;

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = rss.slice(indexOfFirstNews, indexOfLastNews);

    const renderNews = currentNews.map((item, index) => {
        return (
            <News item={item} key={index}/>
        );
    });

    //Page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(rss.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li
                className={number === currentPage ? 'active-page': ''}
                key={number}
                onClick={() => setCurrentPage(number)}
            >
                {number}
            </li>
        );
    });

    return (
        <div>
            {renderNews}
            <div className="page-numbers-wrapper">
                <ul className="page-numbers">
                    {renderPageNumbers}
                </ul>
            </div>
        </div>
    );

};

export default RssFeed;