import React,{useState} from "react";
import {Link,useNavigate} from 'react-router-dom'

const SignUp = () => {
  const [credentials, setcredentials] = useState({name:"",email:"",password:""});
  let navigate = useNavigate();
  const handleSubmit = async(e) =>{
      e.preventDefault();
      const response = await fetch("http://localhost:4000/api/createuser",{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password})
      });
      const json = await response.json();
      console.log(json)

      if(!json.success){
          alert("Enter valid credentials")
      }
      if(json.success){
          navigate("/Auth")
      }
  }

  const onChange = (event) =>{
     setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <div className="bg-[#ffffff] flex min-h-[90vh] items-center justify-center">
      <div className='auth-container min-w-[20%] w-[300px] items-center justify-center'>
      <div className='text-[30px] font-medium'>
            Sign Up
          </div> 
          <div className='text-[#FA144B] text-[13px] px-1'>
            Create a new account
          </div>
      <div className="form-card rounded-lg my-3 py-3">
      <form onSubmit={handleSubmit} className="min-w-[20%] w-[300px] items-center justify-center">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="border border-[#BABFC4] min-w-[90%] h-[50px] p-3 text-[13px]"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={credentials.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border border-[#BABFC4] min-w-[90%] h-[50px] p-3 text-[13px]"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Create Password
          </label>
          <input
            className="border border-[#BABFC4] min-w-[90%] h-[50px] p-3 text-[13px]"
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
        </div>
        <button
          className="auth-btn bg-[#FA144B] mt-5 text-white text-[12px] py-3 min-w-[90%]"
          type="submit"
        >
          Sign Up
        </button>
        <button
          className="auth-btn mt-5 text-[#FA144B] text-[12px] py-3 min-w-[90%]"
          type="submit"
        >
          <Link to='/Auth'>Already have an account?</Link>
        </button>
      </form>
      </div>
      </div>
    </div>
  );
};

export default SignUp;
