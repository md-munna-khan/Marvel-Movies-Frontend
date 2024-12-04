import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";


const Register = () => {
    const handleRegister = e=>{
        e.preventDefault()
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
                  {/* <button type="button" onClick={handleGoggleSignIn} className=" border flex  justify-center rounded-lg items-center p-2 my-2  font-bold ">
              <img className="w-6 ml-2" src={googleImg} alt="" />
                  Log In With Google</button> */}
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