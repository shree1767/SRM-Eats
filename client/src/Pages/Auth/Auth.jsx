import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import './Auth.module.css'
const Auth = () => {
  const [credentials, setcredentials] = useState({email:"",password:""});
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://srm-eats-c2xl.vercel.app/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
  
    if (!json.success) {
      alert("Enter valid credentials");
    }
  
    if (json.success) {
      localStorage.setItem("authToken", json.authToken);
      localStorage.setItem("userRole",json.role);
      console.log(localStorage.getItem("authToken"));
      
      // Check the user's role and navigate accordingly
      if (json.role === "User") {
        navigate("/Home");
      } else if (json.role === "Owner") {
        navigate("/ownerdashboard");
      }
    }
  };
  

  const onChange = (event) =>{
     setcredentials({...credentials,[event.target.name]:event.target.value})
  }

  return (
    <section className='auth-section bg-[#ffffff] flex min-h-screen items-center justify-center'>
        <div className='auth-container min-w-[20%] w-[300px] items-center justify-center'>
          <div className='text-[30px] font-medium'>
            Login
          </div> 
          <div className='text-[#FA144B] text-[13px] px-1'>
            Login to your account
          </div>
          <div className='form-card rounded-lg my-3 py-3'>
          <form onSubmit={handleSubmit}>
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
             Password
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
          <div className='mb-10'>
            <button type='submit' className='auth-btn bg-[#FA144B] mt-5 text-white text-[12px] py-3 min-w-[90%]'>
               Login
            </button>
            <button type='submit' className='auth-btn bg-transparent mt-5 text-[#FA144B] text-[12px] py-3 min-w-[90%]'>
              <Link to='/signup'>Don't have an account?</Link>
            </button>
          </div>
          </form>
          </div>
        </div>
    </section>
  )
}

export default Auth