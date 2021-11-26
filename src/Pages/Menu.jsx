import './Menu.css';
import image from './assets/Rectangle 5.png';
import rating from './assets/Vector (2).png';
import Slider from 'react-slick'

const Menu =  () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <>
                {/* Header Menu */}
                <div className="container">
                    <img className="image" src={image} alt="" />      
                    <div className="header-wrap">
                        
                        <div className="text">
                            <h1>Heavenly Taste</h1>
                            <div className="rating">
                                <img src={rating} alt="" />
                                <p>Rating</p>
                            </div>
                        </div>                        
                    </div>                    
                </div>

                {/* Cart Discount */}
                <div>
                    <h2> Multiple items </h2>
                    <Slider {...settings}>
                    <div>
                        <h3>1</h3>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                    <div>
                        <h3>6</h3>
                    </div>
                    <div>
                        <h3>7</h3>
                    </div>
                    <div>
                        <h3>8</h3>
                    </div>
                    <div>
                        <h3>9</h3>
                    </div>
                    </Slider>
                </div>


        </>
    )
}
export default Menu