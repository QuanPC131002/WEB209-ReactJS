import { useContext } from 'react'
import content from '../assets/img/image 1.jpg'
import highlight from "../assets/img/image 7.jpg"
import Footer from './Footer'
import Header from './Header'
import { ProductContext } from '../contexts/ProductContext'
import { IProduct } from '../interfaces/Product'
function Home(){
    const {products} = useContext(ProductContext)
    return (
        <div className='container'>
              <Header />
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
                    {products && products.map((item: IProduct, index: number) => (
                        <div className="card-item" key={index}>
                            <div className="card-item--image"><img src={item.image} alt="" /></div>
                            <div className="item-title">
                            <h1>{item.title}</h1>
                            <h3>{item.description}</h3>
                                <div className="date">
                                <p>{item.date}</p>
                                <span>Read more</span>
                                </div>
                            </div>
                        </div>
                    ))}
                   
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
            <Footer />

        </div>
    )
}
export default Home