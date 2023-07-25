import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    
        <ul className='btns'>
            <li><Link to="/" ><button>ALL</button> </Link></li>
        
            <li><Link to="/electronics"><button>ELECTRONICS</button></Link></li>
       
            <li><Link to="/jewelery"><button>JEWELERY</button></Link></li>
       
            <li><Link to="/men"><button>MEN'S CLOTHING</button></Link></li>
       
            <li><Link to="/women"><button>WOMEN'S CLOTHINGS</button></Link></li>
        </ul>
   
  )
}

export default Nav