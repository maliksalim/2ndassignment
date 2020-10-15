import React from 'react'
import {Headerbottomleft,Headerbottomright,Headertopright,Mainheader,Headertop,Headerbottom,Headertopleft} from  '../Header/Style'
import {Link} from'react-router-dom';

function Header() {
    return (
 
        <Mainheader>
        
         <Headertop>

<Headertopleft>
<p><i class="fa fa-phone" aria-hidden="true"></i>&nbsp;&nbsp;
(564) 123 4567</p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<p><i class="fa fa-envelope" aria-hidden="true"></i>&nbsp;&nbsp;mail@example.com
   </p>   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<p> Drop Menu</p>





</Headertopleft>
<Headertopright>
<ul className='col'>
       <li><Link to ="/" className='link' ><i class="fa fa-facebook" aria-hidden="true"></i></Link></li>
       <li><Link to ="" className='link'><i class="fa fa-twitter" aria-hidden="true"></i></Link></li>
       <li><Link to ="" className='link'><i class="fa fa-dribbble" aria-hidden="true"></i></Link></li>
       <li><Link to ="" className='link'><i class="fa fa-google-plus" aria-hidden="true"></i></Link></li>
       <li><Link to ="" className='link'><i class="fa fa-pinterest" aria-hidden="true"></i></Link></li>
      
      </ul>

    </Headertopright>
            </Headertop>

 
 <Headerbottom>
 
     <Headerbottomleft>
     <h2>SPHENE</h2>
</Headerbottomleft>
<Headerbottomright>
<ul className='col'>
       <li><Link to ="/" className='link'>HOME</Link></li>
       <li><Link to ="" className='link'>PORTFOLIO</Link></li>
       <li><Link to ="" className='link'>PAGES</Link></li>
       <li><Link to ="" className='link'>ELEMENTS</Link></li>
       <li><Link to ="" className='link'>SHOPS</Link></li>
       <li><Link to ="/BLOGS" className='link'>BLOGS</Link></li>
       <li><Link to ="/CONTACT" className='link'  >CONTACT</Link></li>
       
       <li><Link to ="/" className='link'  ><i class="fa fa-search" aria-hidden="true"></i></Link></li>   
         <li><Link to ="/" className='link'  ><i class="fa fa-cart-arrow-down" aria-hidden="true"></i></Link></li>
</ul>

    </Headerbottomright>

</Headerbottom>


</Mainheader>

    )
}

export default Header
