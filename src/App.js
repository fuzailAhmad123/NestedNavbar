import { useState } from "react";
import "./App.css";
import  {BsChevronDown, BsChevronRight} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlinePlus} from "react-icons/ai"
function App() {
  const [showNavbar , setShowNavbar] = useState(false);
  const [showFirstList , setShowFirstList] = useState(false);
  const [showSecondList , setShowSecondList] = useState(false);
  const [showThirdList , setShowThirdList] = useState(false);
  return (
   <div className="w-screen h-screen bg-slate-900">
    
    {/* navbar  */}
    <div className="w-full h-[70px] bg-slate-800 shadow-lg relative">
             
             <div className="w-[90%] sm:w-[80%] mx-auto flex items-center justify-between sm:justify-evenly py-4">
                    <p className="text-white font-semibold text-3xl">Logo</p>

                    <div className="hidden sm:block">
                      {/* first list  */}
                      <ul className="text-white opacity-80 flex items-center gap-x-6">
                        <li>Home</li>
                        <li>About</li>
                        <li className="flex items-center gap-x-2 cursor-pointer group/first relative">
                          <span>Category</span>
                          <BsChevronDown className="text-[14px] mt-1"/>
                         
                         {/* second list  */}
                          <div className="bg-slate-800 z-10 absolute bottom-0 translate-y-[100%] px-4 py-3 rounded-md border-l-2 border-l-white hidden group-hover/first:block transition-all duration-200 ">
                            <ul className="flex  flex-col gap-y-2 ">
                              <li>Finance</li>
                              <li className="flex items-center gap-x-2 group/second relative">
                                <span>Sports</span>
                                <BsChevronRight className="text-[14px] mt-1"/>
 
                                   {/* third list  */}
                                <div  className="bg-slate-800 z-10 absolute bottom-0 translate-y-[90%] right-0 translate-x-[102%] px-4 py-3 rounded-md border-l-2 border-l-white hidden group-hover/second:block transition-all duration-200 ">
                                       <ul className="flex flex-col gap-y-3">
                                        <li>FootBall</li>
                                        <li>BasketBall</li>
                                        <li className="flex items-center gap-x-2 group/third relative">
                                            <span>Cricket</span> 
                                            <BsChevronRight className="text-[14px] mt-1"/>

                                             {/* forth list  */}
                                            <div className="bg-slate-800 z-10 absolute bottom-0 translate-y-[90%] right-0 translate-x-[102%] px-4 py-3 rounded-md border-l-2 border-l-white hidden group-hover/third:block transition-all duration-200 w-fit min-w-[120px] ">
                                              <ul className="flex flex-col gap-y-3">
                                                  <li>T20 </li>
                                                  <li >World Cup</li>
                                                  <li >Test Match</li>
                                              </ul>
                                            </div>
                                             </li>
                                        <li>Hockey</li>
                                       </ul>
                                </div>
                                </li>
                              <li>Drama</li>
                              <li>Comedy</li>
                            </ul>
                          </div>
                          </li>
                        <li>Resources</li>
                      </ul>
                    </div>

                    <div className="block sm:hidden" >
                             <GiHamburgerMenu className="text-[28px] text-white" onClick={() => setShowNavbar( (prev) => !prev)} />
                    </div>
 
                       {/* mobile navbar  */}
                    <div className={`${showNavbar ? "absolute top-[70px] left-0 " : "absolute right-[100%] hidden"} w-screen  min-h-screen transition-all duration-200 bg-slate-800 block sm:hidden `}>
                      {/* first list  */}
                      <ul className=" w-full flex flex-col text-white opacity-80">
                        <li className="w-full py-2 rounded-md hover:bg-slate-900 px-4">Home</li>
                        <li className="w-full py-2 rounded-md hover:bg-slate-900 px-4">About</li>
                        <li className={`${showFirstList ? "bg-slate-900" : " bg-none"} w-full py-2 rounded-md hover:bg-slate-900 px-4 flex justify-between relative`}>
                          <span>Category</span>
                          <AiOutlinePlus className="text-[14px] mt-1" onClick={ () => setShowFirstList( (prev) => !prev)}/>
                          </li>
                            
                         {/* second list  */}
                         <div className={`${showFirstList ? "block " :"hidden"} w-full h-fit`}>
                            <ul className="flex flex-col gap-y-2 pl-8">
                              <li  className="w-full py-2 rounded-md hover:bg-slate-900 px-4">Finance</li>
                              <li className={`w-full py-2 rounded-md hover:bg-slate-900 px-4 flex justify-between relative ${showSecondList ? "bg-slate-900":"bg-none"}`}>
                                <span>Sports</span>
                                <AiOutlinePlus className="text-[14px] mt-1" onClick={ () => setShowSecondList( (prev) => !prev)}/>
 
                                </li>
                                
                                 {/* third list  */}
                                 <div className={`${showSecondList ? "block " :"hidden"} w-full h-fit`}>
                                       <ul className="flex flex-col gap-y-3 pl-12">
                                        <li  className="w-full py-2 rounded-md hover:bg-slate-900 px-4">FootBall</li>
                                        <li  className="w-full py-2 rounded-md hover:bg-slate-900 px-4">BasketBall</li>
                                        <li className={`w-full py-2 rounded-md hover:bg-slate-900 px-4 flex justify-between relative ${showThirdList ? "bg-slate-900":"bg-none"}`}>
                                            <span >Cricket</span> 
                                            <AiOutlinePlus className="text-[14px] mt-1" onClick={ () => setShowThirdList( (prev) => !prev)}/>

                                             </li>
                                               {/* forth list  */}
                                            <div className={`${showThirdList ? "block " :"hidden"} w-full h-fit`}>
                                              <ul className="flex flex-col gap-y-3 pl-14">
                                                  <li  className="w-full py-2 rounded-md hover:bg-slate-900 px-4">T20 </li>
                                                  <li  className="w-full py-2 rounded-md hover:bg-slate-900 px-4" >World Cup</li>
                                                  <li  className="w-full py-2 rounded-md hover:bg-slate-900 px-4" >Test Match</li>
                                              </ul>
                                            </div>
                                        <li  className="w-full py-2 rounded-md hover:bg-slate-900 px-4" >Hockey</li>
                                       </ul>
                                </div>
                              <li className="w-full py-2 rounded-md hover:bg-slate-900 px-4">Drama</li>
                              <li className="w-full py-2 rounded-md hover:bg-slate-900 px-4">Comedy</li>
                            </ul>
                          </div>
                        <li className="w-full py-2 rounded-md hover:bg-slate-900 px-4">Resources</li>
                      </ul>
                    </div>
             </div>
    </div>
   </div>
  );
}

export default App;
