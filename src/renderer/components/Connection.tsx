import ConnectionStatus from "./ConnectionStatus";
import { connect } from "../util/connections";
import { useState } from "react";

export default function Connection() {
    const [url, setUrl] = useState<string>("ws://localhost:3000");

    const connectToServer = () => {
        connect(url);
    }


    return (
      <>
        <div className='w-96 flex p-2 gap-2 h-full'>
            <ConnectionStatus />
          <input className='w-full bg-slate-700 rounded p-2' placeholder='ws://localhost:3000' onChange={(e) => setUrl(e.target.value) } />
          <button className='bg-gray-600 hover:bg-gray-400 rounded px-2' onClick={connectToServer}>Connect</button>
        </div>
      </>
    );
  }
  