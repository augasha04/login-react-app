import React from "react";

function LogIn(){
    return (
     <form>
     <div className = "Name">
     <label>Enter your name:
           <input type="text" />
         </label>
         <label>Enter your Email:
           <input type="email" />
         </label>
         <button>
         <input type="submit" />
         </button>
     </div>
    </form>
   )}; 

export default LogIn;