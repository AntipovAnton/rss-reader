import * as React from 'react';
import './news.scss';

const News = ({ item }) => (
    <div className='news-wrapper'>
        <div className="news-title">{item.title}</div>
        <div className="news-description">{item.description}</div>
    </div>
);

export default News;