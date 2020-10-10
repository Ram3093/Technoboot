import React  from 'react'
import img1 from '../images/LANDING PAGE BG.jpg'
import { Link } from 'react-router-dom'

const Landing =()=>{
   
        return (
            <div >
            
                <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="false">
    
                      <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                      </ol>

   
                    <div class="carousel-inner">
                 
                       <div class="item active">
                             <img height='780' src={img1} alt="first cake"  />
                            
                       </div>

                       <div class="item">
                             <img height='780' src={img1} alt="second "  />
                           
                       </div>
    
                        <div class="item">
                              <img height='780' src={img1} alt="third" />
                             
                        </div>
  
                    </div>

   
                   
                </div>
                
                <div className='title-div'>
                    <h3>MADE WITH LOVE</h3>
                    <p>Maecenas interdum nisl</p>
                    <p style={{paddingLeft:"1rem"}}>sit amet pulvinar volutpat</p>
                    <p style={{paddingLeft:"1rem"}}>felis eu neque vehicula fringilla.</p>
                    <button className='btn' style={{ borderRadius:"50px"}}>EXPLORE</button>
                </div>
            <div className='navbar-div'>
                <ul class="list-inline">
                    <li><Link to="/"><i class="fas fa-phone-alt"></i>&nbsp;&nbsp; Contact Us</Link></li>
                    <li><Link to="/"><i class="fas fa-map-marker-alt"></i>&nbsp; Delivery</Link></li>
                    <li><Link to="/"> &nbsp; Market &nbsp; <i class="fas fa-bars"></i></Link></li>
                  
                </ul>
                <hr className='my-hr-1' />
            </div>
           
            </div>
        )
    
}

export default Landing
