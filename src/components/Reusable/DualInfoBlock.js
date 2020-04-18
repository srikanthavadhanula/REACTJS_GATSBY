import React from 'react'
import Heading from './Heading'
import {Link} from 'gatsby'

export default function DualInfoBlock({heading,staff}) {
    return (
        <section className = "bg-theme my-4 py-4">
            <div className="container">
                <Heading title = {heading}/>
                <div className="row">
                    <div className="col-8 mx-auto">
                        <p className="lead text-white mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolorum reprehenderit aliquam, nesciunt quasi hic! Suscipit omnis natus, earum, culpa vitae recusandae atque officiis perspiciatis vero impedit sequi doloribus excepturi. Eligendi, exercitationem? Sit obcaecati quis adipisci, corrupti, quia rerum consectetur consequuntur exercitationem dolor laborum animi mollitia voluptatem deleniti fugit similique? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum atque magni quam temporibus sed? Ipsum ducimus, vero consequuntur nam sit quia quod placeat earum ad possimus ea voluptate officiis natus mollitia neque, molestiae fugit iste, ipsam cumque repellat doloremque quaerat! Obcaecati cupiditate earum, quibusdam hic quasi officiis labore et dignissimos illum consequuntur possimus debitis. Officia, voluptates! Ea delectus aliquid ipsa veritatis vero harum, amet, expedita qui quasi, minima dolore! Vero, doloribus ad. Cum, autem nemo commodi ut, veniam, repellat cumque unde quas voluptates iure minima dolores nihil ratione quidem error illum doloremque placeat consequatur perferendis! Porro eum quae consequatur hic.
                        </p>
                    </div>
                    <div className="col-4">
                    <div className="card bg-dark">
                    <img src={staff} className="card-img-top" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-white">click photos</h5>
                        <p className="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-warning btn-block">Go somewhere</a>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
