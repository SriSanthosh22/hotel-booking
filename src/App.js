import images from './components/images/images1.gif';
import React from 'react';
import './App.css';
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
//import About from './components/pages/About';
import Contact from './components/pages/Contact';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';

function App() {
  return (
      
      <div>
      <section className='py-4 bg-success'>
      <div className='container'>
      <h1 style = {{textAlign:'center'}}>About Us</h1>
      </div>
    
      </section>

      <div>
      <section className='section bg-light border-bottom '>
              
            
               <img src = {images} style = {{width : '100%',height: '400px', marginTop: '0px',marginBottom: '30px'}}>
              </img> 
              <h2 style={{marginLeft :'10px'}}>Humsafar.com</h2>
              <div>
              <p style = {{marginLeft : '5px' , marginBottom :'30px'}}>
              By investing in the technology that helps take the friction out of travel, Humsafar.com seamlessly connects millions of travellers with memorable experiences, 
              a range of transport options and incredible places to stay - from homes to hotels and much more. As one of the world’s largest travel marketplaces for
               both established brands and entrepreneurs of all sizes, Humsafar.com enables properties all over the world to reach a global audience and grow their businesses.
              

               Humsafar.com is available in 43 languages and offers more than 28 million total reported accommodation listings, 
              including over 6.2 million listings alone of homes, apartments and other unique places to stay. No matter 
              where you want to go or what you want to do, Booking.com makes it easy and backs it all up with 24/7 customer support.
              </p>
              </div>
             
            <div>
              <h3 style = {{textAlign: 'center'}}>What Humsafar.com Offers</h3><br/><br/>
              <section >

              <section>
              <div class='shadow-lg p-3 mb-5 bg-success rounded'>
      
             <div className='card-body' >
              <h5 style= {{marginLeft :'50px', color:'white'}}>incredible Choice :</h5>
              <p style={{marginLeft :'50px'}}>
              Whether you want to stay in a chic city apartment, a luxury beach resort or 
              a cosy B&B in the countryside, Humsafar.com provides you with amazing diversity 
              and breadth of choice - all in one place.
              </p>
              </div> 
              </div>
              </section>

              <section >
              <div class='shadow-lg p-3 mb-5 bg-primary rounded'>
              <div className='card-body'>
              <h5 style= {{marginLeft :'50px',color:'white'}}>Low rates :</h5>
              <p style= {{marginLeft :'50px'}}>
              Humsafar.com guarantees to offer you the best available rates. And with our promise 
              to price match, you can rest assured that you’re always getting a great deal.
              </p>
              </div>
              </div>
              </section>

              <section>
                
              <div class = 'shadow-lg p-3 mb-5 bg-danger rounded'>
              <div className='card-body'>
                <h5 style= {{marginLeft :'50px',color:'white'}}>instant Confirmation :</h5>
                <p style= {{marginLeft :'50px'}}>
                Humsafar.com, every reservation is instantly confirmed. Once you’ve found your perfect 
                stay, a few clicks are all it takes.
                </p>
                </div>
              </div>
              </section>

              <section>
              <div class= 'shadow-lg p-3 mb-5 bg-warning rounded'>
              <div className='card-body'>
                <h5 style= {{marginLeft :'50px',color:'white'}}>No reservation fee :</h5>
                <p style= {{marginLeft :'50px'}}>
                We don’t charge you any booking fees or add any administrative charges. And in many cases,
                 your booking can be cancelled free of charge.
                </p>
                </div>
              </div>
              </section>

              <section>
              <div class="shadow-lg p-3 mb-5 bg-info rounded">
              <div className='card-body'>
                <h5 style= {{marginLeft :'50px',color:'white'}}>Secure Booking :</h5>
                <p style= {{marginLeft :'50px'}}> 
                We facilitate hundreds of thousands of transactions every day through our secure platform, 
                and work to the highest standards to guarantee your privacy.
                </p>
                </div>
              </div>
              </section>
              </section>
            </div>

            
            
      </section>
      </div>


       
      </div>

    
      
  );
}

export default App;
