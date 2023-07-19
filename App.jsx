import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative
      overflow-x-hidden items-center ">
      <h1 className="bg-white  rounded-lg  w-11/12 text-center mt-[40px]
       text-3xl font-bold py-2 px-10  ">RANDOME GIFS</h1>
        <div className="flex flex-col w-[900px] gap-y-10 mt-[30px] ">
          <Random/>
          <Tag/>
        </div>
    </div>

  ) ;
}
