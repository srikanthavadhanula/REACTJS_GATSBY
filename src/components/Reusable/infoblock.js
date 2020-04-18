import React from 'react'
import Heading from "./Heading"
import { Link } from "gatsby"

export default function infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-white">
                        <p className="lead text-white mb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla debitis eaque aut blanditiis, nisi quod accusamus dolore impedit soluta inventore ipsam autem. Adipisci eligendi sequi corporis quod nemo atque voluptate possimus quas pariatur ducimus! Vero architecto alias vel eligendi iste ea quo, molestias nobis voluptatem natus. Eligendi maxime facilis, vitae laborum eum temporibus hic neque eius ut, optio ab quia?
                        </p>
                        <Link to="/about/">
                            <button className="btn btn-warning btn-lg">
                                {heading}
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
