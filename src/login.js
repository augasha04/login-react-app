import React, { useState } from "react";

function LogIn() {
    return (
          <div className="Name">
            <label>
              Enter your name:
              <input type="text"/>
            </label>
            <label>
              Enter your Email:
              <input type="email" />
            </label>
            <input type="submit" />
          </div>
      );
    } 

export default LogIn;