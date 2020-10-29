import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        
        <div className="home">



            <div class= "container">
            
                <img className="home__image"
                src="https://lh3.googleusercontent.com/proxy/tGkBDJUca3NE_cEOfH4GVVb_EiVOJiqpE7X-2SoRcVBEgVr_Zxof0eFVu-u-6ldVW_fl-dIdsVWCcf9h4OzDkq1sMvO17vE9Nz-u1ogkygVo6T6ka6UlVtRi5fScY4q7CeY5lgGsnQI">
                </img>
                < div class="home_name">Handmade</div>
                <div class = "home_name_bellow" >Indian handicraft shop</div>
                
            </div>
                {/* PRoduct id,title,price,rating, image */}
            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="Home-Decor"
                    price={1123}
                    image="https://cpimg.tistatic.com/05126376/b/4/4-Set-Of-Indian-Handicraft-Home-Decor-Golden-Polish-Labor-Lady-Statue-Decorative-Craft-Item.jpg"
                    rating={5} />
                <Product
                    id="1231234"     
                    title="Painting"
                    price={1123}
                    image="https://5.imimg.com/data5/TestImages/DB/PE/MQ/SELLER-2943039/marble-candle-stand-500x500.jpg"
                    rating={4} />
             
                
            </div>

            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="Pure Clay Items"
                    price={1123}
                    image="https://i.pinimg.com/originals/d1/14/ba/d114baaae13158ef5b98283603dcd3cc.jpg"
                    rating={5}   />
                <Product
                    id="1231234"     
                    title="Wooden Work"
                    price={1123}
                    image="https://4.imimg.com/data4/YW/TW/MY-18751438/owl-wooden-handicraft-500x500.png"
                    rating={4} />
                <Product
                    id="1231234"     
                    title="Emberodiary Work"
                    price={1123}
                    image="https://i.pinimg.com/564x/78/94/ec/7894ece12bf6be418b6e3c6217c386e5.jpg"
                    rating={4} />
                
            </div> 
            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="Best Handicraft Collection"
                    price={1123}
                    image="https://www.spectrahut.com/media/wysiwyg/spectrahut/indian-handicrafts-online-shopping.jpg"
                    rating={5} />
                
                
            </div>
            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="Ciramic Items"
                    price={1123}
                    image="https://5.imimg.com/data5/HE/QF/MY-11408137/decorative-flower-vase-500x500.jpg"
                    rating={5} />
                <Product
                    id="1231234"     
                    title="Bamboo Items"
                    price={1123}
                    image="https://n4.sdlcdn.com/imgs/a/n/7/Asaram-Handicrafts-Brown-Bamboo-Handmade-SDL689254357-1-d1e55.jpg"
                    rating={4} />
                <Product
                    id="1231234"     
                    title="Matel Items"
                    price={1123}
                    image="https://5.imimg.com/data5/LE/KO/MY-40858424/metal-handicraft-500x500.jpg"
                    rating={5} />    
                <Product
                    id="1231234"     
                    title="Leather Work"
                    price={1123}
                    image="https://www.delhigifthouse.com/handicrafts/bags/lbg021.jpg"
                    rating={4} />
                
            </div>  


            {/* <div>
                <p>hello</p>
                <div>
                <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"></script>
                <script nomodule src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>

                <model-viewer src="RoboExpressive.glb" alt="A 3D model of an astronaut" auto-rotate camera-controls ></model-viewer>
            </div> 
            </div>                  */}
                
        </div>
    )
}

export default Home
