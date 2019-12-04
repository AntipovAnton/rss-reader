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
    const pagesCount = Math.ceil(rss.length / newsPerPage);
    const renderPageNumbers = [...Array(pagesCount)].map((_, index) => {
        const pageNumber = ++index;
        return (
            <li
                className={pageNumber === currentPage ? 'active-page': ''}
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
            >
                {pageNumber}
            </li>
        );
    });

    return (
        <div className="news-container">
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