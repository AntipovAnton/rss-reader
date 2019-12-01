import  * as React from 'react'
import './rss.scss';
import loader from '../assets/img/loader.gif';
import useForm from 'react-hook-form'
import { validateUrl } from 'helpers/urlValidator';
import { RssForm } from 'pages/types';
import RssFeed from 'components/RssFeed/RssFeed';

export const Rss = ({isLoading, actions, fetchError, rss}) => {
    const {register, handleSubmit, errors} = useForm<RssForm>();
    const onSubmit = ({rss}) => {
        actions.getRss(rss);
    };
    return (
        <div className="container">
            <h1>RSS Reader</h1>
            <div className="rss-examples">
                <span>http://rss.dw.com/xml/rss-ru-all</span>
                <span>http://rss.dw.de/xml/rss-ru-ger</span>
                <span>http://rss.dw.de/xml/rss-ru-discover-ger</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="text-input">
                    <input
                        name="rss"
                        type="text"
                        placeholder="Please enter RSS feed"
                        ref={
                            register({
                                required: "This field is required",
                                validate: validateUrl,
                            })
                        }
                    />
                    <label htmlFor="rss">RSS</label>
                    {errors.rss && <div className="error-message">{errors.rss.message}</div>}
                    {!errors.rss && fetchError && <div className="error-message">{fetchError}</div>}
                </div>
                <button type="submit" className="button-fetch">Fetch</button>
            </form>
            {isLoading ? <img className="loader" src={loader} alt="loading..."/> : <RssFeed rss={rss} />}
        </div>
    )
};