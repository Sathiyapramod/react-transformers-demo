import React from "react";
import notfound from "../assets/notfound.png";

function ErrorPage() {
     return (
       <div className="">
         Page Not Found
         <img src={notfound} alt="404_page" className="" />
       </div>
     );
}

export default ErrorPage;
