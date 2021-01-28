import React from 'react';

const Footer=()=>{
    const curr_year=new Date().getFullYear();
    return(
        <>
         <footer>
             <p>Copyright &#169; | {curr_year} | Made with ❤️ By Sarwar</p>
         </footer>
        </>
    );
}

export default Footer;