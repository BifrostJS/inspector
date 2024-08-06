import Connection from './../components/Connection';
import { JsonData, JsonEditor } from 'json-edit-react';
import { useState } from 'react';
import { emit } from './../util/connections';

interface BifrostEvent {
    event: string;
    type: string;
    data: JsonData;
}

export function Editor() {
    const [project, setProject] = useState<BifrostEvent[]>([]);

  const [event, setEvent] = useState<string>('');
  const [jsonData, setJsonData] = useState<JsonData>({});

  const send = () => {
    emit({ event, type: "event", data: jsonData });
  }

  const save = () => {
    setProject([...project, { event, type: "event", data: jsonData }]);
  }

  const load = (be: BifrostEvent) => {
    setEvent(be.event);
    setJsonData(be.data);
  }

  return (
    <div className="h-full flex flex-col">
      <div className='h-12'>
        <Connection />
      </div>
      <div className="flex gap-1 bg-slate-950 w-full flex-grow">
        <div className=' w-60 flex-shrink-0 bg-slate-900 h-full p-2'>
          <div className='w-full text-right font-bold text-2xl'>
            +
          </div>
          {project.map((event) => {
            return (
              <div key={event.event} className='w-full p-2 border-b border-slate-800 cursor-pointer' onClick={() => load(event)}>
                {event.event}
              </div>
            )
          })}
        </div>
        <div className="flex-grow h-full bg-slate-900 p-4">

          <div className='flex flex-col gap-2 h-full'>
            <div className="">
              Event
              <input className='w-full bg-slate-700 rounded p-2' onChange={(e) => setEvent(e.target.value)} value={event} />
            </div>
            <div className='flex flex-col flex-grow'>
            Data
            <JsonEditor
            className='flex-grow w-full'
            data={ jsonData }
            setData={ setJsonData } // optional
            maxWidth={10000000}
            theme="githubDark"
            />
            </div>
            <div className='flex h-12 justify-between'>
                <button className='bg-gray-600 hover:bg-gray-400 rounded px-2' onClick={save}>Save</button>
                <button className='bg-gray-600 hover:bg-gray-400 rounded px-2' onClick={send}>Send</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}