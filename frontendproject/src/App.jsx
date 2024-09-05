import { useState } from 'react'
import './App.css'

function App() {
  const [formDate, setFromData] = useState({name:'',message:'',email:''});
  const handleChange=(e)=>{
    const{ name,value}=e.target;
    setFormData({
      ...formDate,
      [name]:value
    });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
     const response=await axios.post("http://localhost:5000/submit",formDate);
      console.log(response.data);
       alert("form submitted successfully");
    }catch(error){
        console.error("Error submitting form",error);
        alert("Failed to submit form");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label>Name</label>
      <input type="text" name="Name" value={formDate.Name} onChange={handleChange} required/>
    </div>
    <div>
      <label>Message</label>
      <input type="text" name="Message" value={formDate.Message} onChange={handleChange} required/>
    </div>
    <div>
      <label>Email</label>
      <input type="text" name="Email" value={formDate.Email} onChange={handleChange} required/>
    </div>
    <button type="Submit" >submit</button>
    </form>
  );
}
export default App;
