// react-router-dom(rrd) imports
//useloaderData allows access to whatever is in loader function
//children are passed down in the Outlet component
import { Outlet, useLoaderData } from 'react-router-dom';

//assets
import wave from "../assets/wave.svg";

//components
import Nav from "../components/Nav";

//helper functions imports
import { fetchData } from '../helpers';

//loader(tells rrd how to load data on each individual route)
export function mainLoader() {
  const userName = fetchData('userName');
  return { userName };
}
//dashboard function
export default function Main() {
  const { userName } = useLoaderData();

  return (
    <div className="layout">
        <Nav userName = {userName} />
        <main>
            <Outlet/>
        </main>
      <img src = {wave} alt = ""/>
    </div>
  );
}
