import { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../layouts/AuthProvider";


const Register = () => {
  const { createNewUser,signInWithGoggle}= useContext(AuthContext)
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
    const handleRegister = e=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
    console.log(name,email,password,photo)
      // Clear previous messages
  setErrorMessage('');
  setSuccessMessage('');


    createNewUser(name,email,photo,password)
    .then((result)=>{
      console.log(result.user)
    }).catch((error)=>{
      console.log(error.message)
    })
    
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
        if (!passwordRegex.test(password)) {
          setErrorMessage("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
          toast.error("Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.");
          return;
        }
      }
        // goggle sign in
  const handleGoggleSignIn=()=>{
    signInWithGoggle()
    .then(()=>{
      setSuccessMessage("Goggle  log in successful!");
        toast.success("Goggle log in successful!");
        setTimeout(() => {
          navigate('/');
        }, 2000); // Delay to show success message
      })
     .catch((error) => {
      setErrorMessage(error.message);
      toast.error(error.message);
    });
  }
    
    return (
        <div>
           <div className="min-h-screen flex my-10 justify-center ">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col">
            <div className="card bg-base-100 my-10 w-full max-w-lg shrink-0 shadow-2xl lg:p-10">
              <form onSubmit={handleRegister} className="card-body  w-full pt-5">
                <h1 className="lg:text-5xl md:text-2xl font-bold">Register now!</h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input type="text" placeholder="photo" name="photo" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                  {/* <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label> */}
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>Already have an account? Please <Link className="text-red-600" to='/login'>Login</Link></p>
                {/* {errorMessage && <p className="text-red-600">{errorMessage}</p>}
                {successMessage && <p className="text-green-600">{successMessage}</p>} */}
                  <button type="button" onClick={handleGoggleSignIn} className=" border flex  justify-center rounded-lg items-center p-2 my-2  font-bold ">
              {/* <img className="w-6 ml-2" src={googleImg} alt="" /> */}
                  Log In With Google</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    <Toaster></Toaster>
    </div>
        

    );
};


export default Register;