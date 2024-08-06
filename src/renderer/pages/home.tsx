import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="h-full w-full flex flex-col justify-center">
        <div className='w-96 mx-auto flex'>
            <div className='w-full border-r p-4 flex flex-col'>
                <b>Projects</b>
            </div>
            <div className='w-full p-4 flex flex-col justify-center'>
                <Link to="/editor">New project</Link>
            </div>
        </div>
    </div>
  );
}