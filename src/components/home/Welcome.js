import React, { Component } from 'react';
 import { Col} from 'react-bootstrap';
 import ControlledCarousel from '../common/Courasel';

class Welcome extends Component {
    render() {
        const p1= 'It is Important to meet you .... '
        const h1 = ' Your Businnes Lorem Ipsum has been the industry standard dummy text ever since the 1500s'
        const h2='Get started today and Join the first Shipping legend. increase your customer satisfaction '
        return (

               <Col >
                    
            
                        <ControlledCarousel h1= {h1} paragraph={p1} h2={h2}/>
         
             
               </Col> 
        
        );
    }
}

export default Welcome;
