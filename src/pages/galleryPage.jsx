import React from 'react'
import Footer from '../Components/Footer'
import './css/gallery.css'
import p1 from '../assests/Gallery/kkr.jpg'
import p2 from '../assests/Gallery/AnimalFeeding.jpg'
import p3 from '../assests/Gallery/BooksDistribution.jpg'
import p4 from '../assests/Gallery/ClothsDistribution.jpg'
import p5 from '../assests/Gallery/FoodDistribution.jpg'
import p6 from '../assests/Gallery/FreeEducation.jpg'
import p7 from '../assests/Gallery/OnlineEvents.jpg'
import p8 from '../assests/Gallery/SanitaryPad (1).jpg'
import p9 from '../assests/Gallery/TreePlantation.jpg'
import p10 from '../assests/Gallery/Workshops.jpg'





const GalleryPage = () => {
  

    return (
        <div   style={{ height: "", marginTop: "5.5rem", textAlign: "" }}>

            <img src={p1} alt='img' id='Gallerylogo' />
            <div className='GalleryDiv' style={{textAlign:"center"}}>
                <div className='Galleryus' style={{textDecoration: "underline"}}>Gallery</div>
                <div className='HomeAndGallery'>Home / Gallery</div>
            </div>


            <div style={{textAlign:"center"}}>
            <div className='Our-Gallery'> Our Gallery</div>
            <div className='OurGallerySub'>Moments of Impact: Capturing the Journey of Our NGO</div>

            </div>


            <div className='items'>

                <div className='item' >
                    <img src={p2} alt="img" />
                    <div className='displayName'>Animal Feeding</div>
                </div>
                <div className='item' >
                    <img src={p3} alt="img" />
                    <div className='displayName'>Books Distribution</div>
                </div>
                <div className='item' >
                    <img src={p4} alt="img" />
                    <div className='displayName'>Cloth Distribution</div>
                </div>
                <div className='item' >
                    <img src={p5} alt="img" />
                    <div className='displayName'>Food Distribution</div>
                </div>
                <div className='item' >
                    <img src={p6} alt="img" />
                    <div className='displayName'>Free Education</div>
                </div>
                <div className='item' >
                    <img src={p7} alt="img" />
                    <div className='displayName'>Online Events</div>
                </div>
                <div className='item' >
                    <img src={p8} alt="img" />
                    <div className='displayName'>Empowering Women</div>
                </div>

                <div className='item' >
                    <img src={p9} alt="img" />
                    <div className='displayName'>Tree Plantation</div>
                </div>

                <div className='item' >
                    <img src={p10} alt="img" />
                    <div className='displayName'>Free workShop</div>
                </div>

                
                
            </div>
            



        <Footer/>

        </div>
    )
}

export default GalleryPage