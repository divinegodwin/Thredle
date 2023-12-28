import { Navbar } from "../Navbar/Navbar";
import Link from "next/link";
const About = () =>{
 
    return(
        
        <div>
            <Navbar h1 ="About Thredle" />

<div className="flex justify-center p-6 shadow-lg">
            <h1 className="text-2xl justify-center">About</h1>
            
            </div>

            <div className="m  p-1 ml-5 w-[90%] h-[400px] rounded-lg shadow-lg">
               <div>
                <p className="tracking-wide flex justify-center pt-4 ">
                <span className="font-bold pl-2 mt-2 pr-6">Welcome to Thredle– </span>
                where your thought take center stage! We're your go-to app for 
                 collecting and showcasing your ideas effortlessly. 
                 With Thredle, inputting and displaying your moments is
                  as simple as a Facebook post. Join us in weaving the threads 
                  of your life's stories!
                </p>
            </div>

         <Link href="/">
            <div>
            <button className="p-3 mt-8 rounded-lg ml-[8rem] w-[110px] h-[50px] bg-[#3f37c9] text-white ">Explore</button>
            </div>
</Link>

</div>

        </div>
    )
}

export default About;