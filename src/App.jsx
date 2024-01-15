import Hero from "./component/Hero"
import UnderWater from "./component/UnderWater"


function App() {
  

  return (
    <>
     <div className="w-screen h-screen relative">
      {/* <div className="w-screen h-screen bg-rose-100"></div> */}
      <Hero/>
      <UnderWater/>
      <div className="w-screen h-screen bg-[#4396ea]"></div>
     </div>
       
    </>
  )
}

export default App
