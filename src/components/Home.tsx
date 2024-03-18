import content from '../img/image 1.jpg'
import item1 from "../img/image 2.jpg"
import item2 from "../img/image 4.jpg"
import item3 from "../img/image 5.jpg"
import highlight from "../img/image 7.jpg"
function Home(){
    return (
        <div>
            <div className="content">
                <div className="content-section">
                    <div className="content-section--title">
                        <h2>long established</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
                        <div className="date">
                            <p>May 20th 2020</p>
                            <span>Read more</span>
                        </div>
                    </div>
                    <div className="content-section--img">
                        <img src={content} alt="" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-item">
                        <div className="card-item--image"><img src={item1} alt="" /></div>
                        <div className="item-title">
                        <h1>long established</h1>
                        <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h3>
                            <div className="date">
                            <p>May 20th 2020</p>
                            <span>Read more</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="card-item--image"><img src={item2} alt="" /></div>
                        <div className="item-title">
                        <h1>long established</h1>
                        <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h3>
                            <div className="date">
                            <p>May 20th 2020</p>
                            <span>Read more</span>
                            </div>
                        </div>
                    </div>
                    <div className="card-item">
                        <div className="card-item--image"><img src={item3} alt="" /></div>
                        <div className="item-title">
                        <h1>long established</h1>
                        <h3>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</h3>
                            <div className="date">
                            <p>May 20th 2020</p>
                            <span>Read more</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content-highlight">
                        <div className="content-highlight--title">
                            <h2>What is Lorem Ipsum?</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution...</p>
                            <div className="date">
                                <p>May 20th 2020</p>
                                <span>Read more</span>
                            </div>
                        </div>
                    <div className="content-highlight--img"><img src={highlight} alt="" /></div>
                </div>
                <div className="content-button">
                    <button>See more</button>
                </div>
            </div>
            <div className="border"></div>
        </div>
    )
}
export default Home