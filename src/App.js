import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div  >
      <Header />
      <AddTaskForm />
      <Tasks />
    </div>
  );
}

export default App;


function Header() {
  return <div className='flex justify-between bg-gray-500/[0.2] rounded h-16 m-5 p-3' >
    <img className='w-10  mx-2 cursor-pointer ' src={logo} alt="logo" />
    <div className='flex w-fit '>
      <span className='bg-black mx-2 my-1  p-4 rounded-full cursor-pointer '></span>
      <span className='bg-white mx-2 my-1 p-4 rounded-full  cursor-pointer'></span>
    </div>
  </div>
}

function AddTaskForm() {
  return <div className='flex justify-center items-center bg-gray-500/[0.2] rounded m-5 p-3 h-16' >
    <form className=' flex  '>
      <input placeholder='New task' className='h-8 bg-white/[0.9] px-3 py-1 mx-2 rounded' />
      <Button>Add</Button>
    </form>
  </div>
}

function Button({ children }) {
  return <button className='h-8 bg-white/[0.9] p-1 px-4 mx-2 text-sm font-bold rounded cursor-pointer'>{children}</button>
}

function Tasks() {
  return <div className=' bg-gray-500/[0.2] rounded m-5 p-3 divide-y divide-gray-500/[0.8] ' >

    <div className='flex justify-between pb-3 '>

      <span className='flex items-center content-center'> <h1 className='text-white font-bold px-1 '>Tasks</h1><span className=' bg-white rounded-full px-2 mx-1 py-[1px] font-bold text-sm text-center'>3</span> </span>
      <Button>Clear</Button>

    </div>

    <div className=' h-96 p-5 mx-1'>
      <ul className='grid grid-cols-3 gap-5'>
        <li className='bg-gray-300/[0.5] p-3 rounded text-center text-black font-bold'>Finich The Code</li>
        <li className='bg-gray-300/[0.5] p-3 rounded text-center text-black font-bold'>Finich The Code</li>
        <li className='bg-gray-300/[0.5] p-3 rounded text-center text-black font-bold'>Finich The Code</li>
      </ul>
    </div>

  </div >

}

