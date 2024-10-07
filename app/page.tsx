import Image from "next/image";
import Link from "next/link";
import cycleImage from '../../public/Images/Cycle.jpg';
import './animated.css';
export default function Home() {
  return (
    <main className="">
     
    
         <div className="text-center mt-10">
          <p >Write Your Daily Journal<br/>And Your Thoughts</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>Suscipit iusto dicta doloremque dignissimos tempora ullam,
            <br/> doloribus deserunt sit ea molestiae</p>
            </div>
            <div className="text-center mt-5">
            <button className="text-white bg-red-700 rounded-lg px-4 py-2 m-8">Get Started</button>
        </div>
        <div className="mt-10 grid lg:grid-cols-4 gap-2 px-20">
        <div className="bg-violet-900 rounded-3xl w-64 h-56 p-4"><p>Cycling and <br/>enjoy the<br/> city</p>
        <img src="/Images/Cycle.jpg" alt="Cycle" className="w-14 h-16 mt-10 float-right"/>
        </div>
        <div className="bg-zinc-600 rounded-3xl w-64 h-56 p-4"><p className="text-left">Street<br/>Photography<br/>Journal</p>
        <img src="/Images/Silho.jpg"alt="Silho" className="w-14 h-16 mt-10 float-right"/>
        </div>
        <div className="bg-red-200 rounded-3xl w-64 h-56 p-4"><p>My First Trip <br/>with My<br/> Patner</p>
        <img src="/Images/Trip.jpg" alt="Trip" className="w-14 h-16 mt-10 float-right"/>        
        </div>
        <div className="bg-green-500 rounded-3xl w-64 h-56 p-4"><p>First Day at<br/> Office Very <br/>Nervous</p>
        <img src="/Images/Office.jpg" alt="office" className="w-14 h-16 mt-10 float-right"/></div>
        </div>
    </main>

  );
}
