import React from 'react';
import './App.css';

function App() {
  return(
    <div className="wrapper">
      <h1>Registration Form</h1>
      
      <form onSubmit={() => alert(`Successfully registered`)}>
      <fieldset>
         <label>
           <p>Name</p>
           <input name="name" />
         </label>
         <label>
           <p>Address</p>
           <input name="address" />
         </label>
         <label>
           <p>Age</p>
           <input name="age" />
         </label>
         <label>
           <p>Gender</p>
           <input name="gender" />
         </label>
         <label>
           <p>Do you want to subscribe?</p>
           <select name="subcribe">
               <option value="">--Please choose an option--</option>
               <option value="email">Email</option>
               <option value="mail">Mail</option>
               <option value="None">None</option>
           </select>
         </label>
       </fieldset>
       <br/>
       <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default App;