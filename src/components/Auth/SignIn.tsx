import SignUpImage from "/Signin.jpg";
import Logo from '/BN.png';
import { FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import './SignUp.css'; 
export default function SignIn() {
    return (
        <div className="h-screen flex justify-center items-center bg-black">
            <div className="flex w-full  h-[80vh] bg-black rounded-lg overflow-hidden shadow-lg p-6">
                <img src={SignUpImage} className="lg:w-[50%] w-[0%] h-full object-cover rounded-2xl" />
                <div className="bg-black text-white pl-6 pr-6 pb-6 lg:w-[50%] w-[100%] h-full flex flex-col justify-between overflow-y-auto custom-scrollbar">
                    <div>
                        <img src={Logo} className="w-20 rounded-lg mx-auto mb-2" />
                        <h1 className="font-semibold text-2xl font-newfont mb-2 text-center">Welcome to Bill Nexus</h1>
                        <h2 className="font-newfont font-normal mb-4 text-center">Sign In to access our services</h2>
                        <div>
                            <h2 className="font-newfont font-bold mb-2">Email Address</h2>
                            <input type="email" placeholder="abc@gmail.com" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-full hover:border-[#E21D48] mb-4" />
                        </div>
                        <div>
                            <h2 className="font-newfont font-bold mb-2">Password</h2>
                            <input type="password" placeholder="*******" className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-full hover:border-[#E21D48] mb-6" />
                        </div>
                        <div>
                            <button className="font-newfont font-extrabold text-lg p-3 rounded-lg bg-[#1e1e1f] border-2 border-gray-500 w-full hover:border-[#E21D48] flex gap-4 justify-center mb-4">
                                Sign In <FaArrowRightLong className="mt-1 text-sm" />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center">
                            <hr className="flex-grow border-gray-500" />
                            <span className="font-newfont font-medium text-lg px-4">Or</span>
                            <hr className="flex-grow border-gray-500" />
                        </div>
                        <h2 className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-full hover:border-[#E21D48] flex justify-center cursor-pointer">
                            Continue With Google <span className="ml-4 text-2xl"><FcGoogle /></span>
                        </h2>
                        <h2 className="font-newfont p-3 rounded-lg bg-[#27272a] border-2 border-gray-500 w-full hover:border-[#E21D48] flex justify-center cursor-pointer">
                            Continue With GitHub <span className="ml-4 text-2xl"><FaGithub /></span>
                        </h2>
                        <h2 className="text-center text-slate-200 cursor-pointer">
                            Don't have an account? <span className="ml-1 text-blue-600 underline hover:text-[#E21D48]"><Link to={'/SignUp'}>SignUp</Link></span>
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
}
