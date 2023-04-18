import React, { useState } from "react";
function LogIn() {
    const [name, setName] = useState("");
    function handleSubmit(event) {
      event.preventDefault();
      alert(`Welcome, ${name}!`);
    }
    function handleNameChange(event) {
      setName(event.target.value);
    }
    return (
        <form onSubmit={handleSubmit}>
          <div className="Name">
            <label>
              Enter your name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
             <br/>
            <label id="email">
              Enter your Email:
              <input type="email" />
            </label>
            <br/>
            <input id="button" type="submit" />
          </div>
        </form>
      );
    }

export default LogIn;