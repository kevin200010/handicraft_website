import React from 'react'
import "./Home.css"
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://www.craftexporters.com/img/home_slider/1548406431_1522157452-main-banner-1-1902x610.jpg">
            </img>

                {/* PRoduct id,title,price,rating, image */}
            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5} />
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4} />
             
                
            </div>

            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5} />
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4} />
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4} />
                
            </div> 
            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5} />
                
                
            </div>
            <div className="home__row">
            {/* product */}
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5} />
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={4} />
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
                    rating={5} />    
                <Product
                    id="1231234"     
                    title="the book by kevin jerejh ejgvre ejyrgje wemrhjehwr emhrjher erhjerh erhkejhr ejrher ejhrkj wejrhkej ekwjhrke kwejhrkewj ejrhkwejh"
                    price={1123}
                    image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY327_FMwebp_QL65_.jpg"
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
