
import { useState } from 'react';
import './App.css';

function App() {

const [color, setColor] = useState("black");

  return (
    <>
    <div className="w-full h-screen duration-200 flex flex-col justify-center" style={{background:color}}>
      <div className="px-2 py-2 fixed left-0 flex flex-wrap flex-col justify-center mx-12 my-12 text-center rounded-3xl gap-5" style={{background:"white"}}>
        <button onClick={()=>setColor("red")} className="px-7 py-2 text-white rounded-full text-lg outline-none" style={{background:"red"}}>Red</button>
        <button onClick={()=>setColor("orange")} className="px-7 py-2 text-white rounded-full text-lg outline-none" style={{background:"orange"}}>Orange</button>
        <button onClick={()=>setColor("yellow")} className="px-7 py-2 text-white rounded-full text-lg outline-none" style={{background:"yellow"}}>Yellow</button>
        <button onClick={()=>setColor("green")} className="px-7 py-2 text-white rounded-full text-lg outline-none" style={{background:"green"}}>Green</button>
        <button onClick={()=>setColor("blue")} className="px-7 py-2 text-white rounded-full text-lg outline-none" style={{background:"blue"}}>Blue</button>
        <button onClick={()=>setColor("indigo")} className="px-7 py-2 text-white rounded-full text-lg outline-none" style={{background:"indigo"}}>Indigo</button>
        <button onClick={()=>setColor("violet")} className="px-7 py-2 text-white rounded-full text-lg outline-none" style={{background:"violet"}}>Violet</button>
      </div>
    </div>
    </>
  );
}

export default App;
