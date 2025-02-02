"use client";
import React, {useState,useEffect,useRef} from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import DecorativeFrame from "@/components/signin/frame";
import { User,Mail, Phone, X } from "lucide-react";
import { FaFacebookF} from "react-icons/fa";
import { TbBrandInstagramFilled, TbBrandTiktokFilled, TbBrandYoutubeFilled } from "react-icons/tb";
const App = () => {

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  

  
  




  



  return (
    <div className="relative">  
    <div style={{transform: `translateY(${scrollY*0.5}px`}}  className="h-[85vh] relative  w-full bg-[#10171D]">
      <div
        className="h-full w-full absolute shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/signin/bg1.png')" }}>
          <img src="/signin/bg1r.png" alt="background image" className="h-full pointer-events-none absolute bg-no-repeat right-0"/>
          <img src="/signin/bg1l.png" alt="background image" className="h-full pointer-events-none absolute bg-no-repeat left-0"/>
          <div className="flex flex-col items-center justify-center h-full w-full">
          <div
            className="text-white  text-[1.5rem] max-w-[15rem] font-sans tracking-wider -mt-16 mb-8 bg-gradient-to-r from-green-500 to-transparent text-center rounded-full"
            style={{ padding: "10px 15px" }}
          >
            HOME • SIGN IN
          </div>
          <div className="text-white text-8xl font-bold font-sans">SIGN IN</div>
        </div>
      </div>
    </div>
    <div  style={{transform: scrollY > 700 ? `translateY(${(scrollY-700)*0.4}px` : ''}} className="h-[100vh]  relative w-full bg-[#10171D]">
      <div
        className="h-full w-full absolute shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/signin/fbg2.png')" }}>
          

          

          
          <div className="flex h-full w-full">
 
    <div className="h-full w-1/2 flex flex-col items-center justify-center font-sans gap-4">
      <section className="w-3/4 pl-1 mx-auto flex justify-start text-lg text-[#3BE174]">
        HACKATHONS
      </section>
      <section className="w-3/4 mx-auto flex justify-start text-6xl text-white font-bold">
        HACKATHONS
      </section>
      <section className="w-3/4 mx-auto flex justify-start text-lg text-white">
        Teleport to the 27th Edition of Techfest and celebrate the interplay between Magic, Science & Technology. Step into the realm of wonders where the frontiers of imagination are translated into real-world possibilities.
      </section>
      <section className="w-3/4 mx-auto flex justify-start">
        <button
          className="h-14 w-44 rounded-full text-lg font-bold bg-gradient-to-b from-[#43F27F] to-[#0A772F] text-white"
        >
          CLICK TO OPEN
        </button>
      </section>
    </div>

    {/* Right Section */}
    <div className="h-full w-1/2 flex items-center justify-center relative">
    <img src="/signin/bgdots.png" alt="background image" className="z-10 pointer-events-none absolute bg-no-repeat bottom-1/5"/>
      <DecorativeFrame />
    </div>
  </div>
      </div>
    </div>
    <div style={{transform: scrollY > 900 ? `translateY(${(scrollY-900)*0.2}px` : ''}} className="h-[100vh] relative  w-full bg-[#10171D]">
      <div
        className="h-full w-full absolute shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/signin/bg3.png')" }}>
          
          
         
          
          
          
          <div className="flex h-full w-full">
      
      {/* Left Section */}  
      <div className="h-full w-1/2 relative flex items-center justify-center">
      <DecorativeFrame />
      <img src="/signin/bgdots.png" alt="background image" className="z-10 pointer-events-none absolute bg-no-repeat bottom-1/5"/>
    </div>
    {/* Right Section */}
    <div className="h-full w-1/2 flex flex-col items-center justify-center font-sans gap-4">
      <section className="w-3/4 pr-1 mx-auto flex justify-end text-lg text-[#3BE174]">
        ACCOMODATION
      </section>
      <section className="w-3/4 mx-auto flex justify-end text-6xl text-white font-bold">
      ACCOMODATION
      </section>
      <section className="w-3/4 mx-auto flex justify-start text-lg text-white">
        Teleport to the 27th Edition of Techfest and celebrate the interplay between Magic, Science & Technology. Step into the realm of wonders where the frontiers of imagination are translated into real-world possibilities.
      </section>
      <section className="w-3/4 mx-auto flex justify-end">
        <button
          className="h-14 w-44 rounded-full text-lg font-bold bg-gradient-to-b from-[#43F27F] to-[#0A772F] text-white"
        >
          CLICK TO OPEN
        </button>
      </section>
    </div>

    
  </div>
      </div>
      <img src="/signin/bg2b.png" alt="background image" className={`w-full z-10 pointer-events-none absolute bg-no-repeat bottom-[calc(100vh-120px)]`}/>
    </div>


      {/* <div className="-mt-8">
      <div className="w-full h-12 bg-gradient-to-b from-[#10171de9] to-[#10171d] backdrop-filter radial-blur-asf">
      </div>
      <div className="h-8 bg-blend-hard-light w-full bg-gradient-to-r from-[#10171dfe] via-[#10171d] to-[#10171dfe]"> 
      </div>
      <div className="w-full h-12 bg-gradient-to-t from-[#10171de9] to-[#10171D]">
      </div>
      </div>
       */}
      {/* <div className="-mt-8 h-32 w-full bg-[#10171D] backdrop-blur-[111px]"></div> */}

      {/* <section
        className="h-32 w-full -mt-6 z-10 shadow-2xl shadow-[#10171D] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/signin/blurdiv.png')" }}
      >
      </section> */}
      {/*  */}
      <div  className="h-[185vh]  relative bg-[#10171D]">
      <div
        className="h-full w-full absolute bottom-0 shadow-2xl shadow-[#10171D] bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/signin/bg4.png')" }}
      >



        <div className="flex flex-col items-center justify-center h-full w-full gap-4 font-serif">
          <section className="w-full h-2/5"></section>
        <section className="text-white text-8xl font-bold font-sans">TECHFEST</section>
        <section className="text-white max-w-3xl text-center text-xl font-sans mt-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</section>
        <div className="w-2/5 h-[1px] bg-gradient-to-r from-[#40EC7B00] via-[#FFFFFF] to-[#40EC7B00]"></div>
        
        <section className="text-white h-16 justify-center items-center text-sm flex font-normal"><User strokeWidth={1.75}  color="white" className="text-sm"/> <pre>  kenzinlawson  </pre> <pre className="text-white/50 text-sm">|  </pre> <Mail  color="white" strokeWidth={1.75} /> <pre>  kenzi.lawson@example.com  </pre>
        <pre className="text-white/50 text-sm">|  </pre> <Phone  color="white" strokeWidth={1.75} /> <pre>  kenzi.lawson@example.com  </pre>
        </section>
        <section className="text-white justify-center items-center text-sm flex font-normal"><User strokeWidth={1.75}  color="white" className="text-sm"/> <pre>  kenzinlawson  </pre> <pre className="text-white/50 text-sm">|  </pre> <Mail  color="white" strokeWidth={1.75} /> <pre>  kenzi.lawson@example.com  </pre>
        <pre className="text-white/50 text-sm">|  </pre> <Phone  color="white" strokeWidth={1.75} /> <pre>  kenzi.lawson@example.com  </pre>
        </section>

        <section className="max-w-6xl h-16 flex gap-6 mt-12">
          <button className="h-16 w-16 p-5 text-xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><FaFacebookF color="white" fill="white"/></button>
          <button className="h-16 w-16 p-5 text-2xl  rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><TbBrandInstagramFilled className="text-2xl" color="white" fill="white"/></button>
          <button className="h-16 w-16 p-5 text-xl rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><X color="white" fill="white"/></button>
          <button className="h-16 w-16 p-5 rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><TbBrandYoutubeFilled className="text-2xl" color="white" fill="white"/></button>
          <button className="h-16 w-16 p-5 rounded-[50%] bg-gradient-to-r from-[#43F27F] to-[#0A772F] text-center"><TbBrandTiktokFilled className="text-2xl" color="white" fill="white"/></button>
        </section>

        </div>
        </div>
        <img src="/signin/bg3b.png" alt="background image" className={`w-full z-10 pointer-events-none absolute bg-no-repeat bottom-[calc(185vh-180px)]`}/>
        <img src="/signin/bg4br.png" alt="background image" className="pointer-events-none absolute bottom-0 right-0"/>
        <img src="/signin/bg4bl.png" alt="background image" className="pointer-events-none absolute bottom-0 left-0"/>
        <img src="/signin/bg4line.png" alt="background image" className="pointer-events-none absolute bottom-3/4 right-0 w-1/2"/>
        </div>

    



    </div>

  );
};

export default App;