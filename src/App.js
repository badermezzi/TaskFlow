import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div  >
      <Header />
      <AddTaskForm />
      {/* <Tasks /> */}
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
    <form className=' '>
      <input placeholder='New task' className=' bg-white/[0.9] px-3 py-1 mx-2 rounded' />
      <button className='bg-white/[0.9] p-1 px-4 mx-2 font-bold rounded cursor-pointer'>ADD</button>
    </form>
  </div>
}