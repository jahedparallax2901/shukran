import React from 'react'
import { Link } from 'react-router-dom'
import FooterMarketPlace2 from '../components/partials/footer/FooterMarketPlace2'
import Header from '../components/partials/Header/Header'

export default function NotFound() {
    return (
        <div className="site-content">
        <Header />
        <div className="ps-page--404">
            <div className="container">
                <div className="ps-section__content">
                    <figure>
                        <img src="/static/img/404.jpg" alt="" />
                        <h3>Ohh! Page not found</h3>
                        <p>
                            It seems we can't find what you're looking for.{' '}
                            <br />
                            Go back to
                            <Link to="/">
                                 Homepage
                            </Link>
                        </p>
                    </figure>
                </div>
            </div>
        </div>
        <FooterMarketPlace2 />
    </div>
    )
}
