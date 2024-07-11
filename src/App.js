import logo from './logo.png';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  useEffect(() => (
    localStorage.setItem("tasks", JSON.stringify(tasks))
  ), [tasks]);


  const [tasksNumber, setTasksNumber] = useState(tasks.length);

  function addNewTaskHandler(newTask) {

    const id = new Date().getTime() + Math.round(Math.random() * 100000);
    const date = new Date(new Date().getTime() + 60 * 60 * 1000).toUTCString();

    setTasks([{
      id: id,
      todo: newTask,
      date: date,
    }, ...tasks])

    setTasksNumber(tasks.length + 1);

  }

  function deletBtnHandler(selectedTask) {

    setTasks(tasks.filter((task) => (task.id !== selectedTask.id)))

    setTasksNumber(tasks.length - 1);

  }

  const [isPromptOpen, setIsPromptOpen] = useState(false);

  useEffect(() => {
    if (isPromptOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPromptOpen]);

  function clearAllHandler() {
    if (tasks.length === 0) return;
    setIsPromptOpen(true);
  }

  function handlePromptSubmit(value) {
    if (value.toLowerCase() === 'clear') {
      setTasks([]);
      setTasksNumber(0);
    }
    setIsPromptOpen(false);
  }

  const [input, setInput] = useState("");

  return (
    <div className='relative' >
      <Header />

      <AddTaskForm addNewTaskHandler={addNewTaskHandler} />

      <Tasks tasks={tasks} tasksNumber={tasksNumber} deletBtnHandler={deletBtnHandler} clearAllHandler={clearAllHandler} />

      {isPromptOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"></div>

          <div className="fixed inset-0 z-50 overflow-y-auto">

            <div className="flex min-h-full items-center justify-center p-4">

              <div className="bg-gray-800 p-6 rounded-lg shadow-xl max-w-sm w-full">

                <h3 className="text-lg font-semibold mb-4 text-white">Confirm Clear</h3>
                <p className="mb-4 text-gray-300">Are you sure you want to clear all tasks? Type 'clear' to confirm.</p>
                <input value={input} onChange={(e) => (setInput(e.target.value))} type="text" placeholder="Type 'clear' to confirm" className="h-8 w-full px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500" onKeyDown={(e) => { if (e.key === 'Enter') handlePromptSubmit(input); }} />
                <div className="flex justify-end space-x-2">
                  <Button onClick={() => setIsPromptOpen(false)}  >
                    Cancel
                  </Button>
                  <Button onClick={() => handlePromptSubmit(input)} >
                    Confirm
                  </Button>
                </div>

              </div>

            </div>

          </div>
        </>
      )}
    </div>
  );
}
export default App;


function Header() {
  return <div className='flex justify-center bg-gray-500/[0.2] rounded h-16 m-5 p-3' >
    <img className='w-10  mx-2 cursor-pointer drop-shadow-glow' src={logo} alt="logo" />

  </div>
}

function AddTaskForm({ addNewTaskHandler }) {

  const [newTask, setNewTask] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();

    if (!newTask) return;

    addNewTaskHandler(newTask);

    setNewTask("");

  }

  return <div className='flex justify-center items-center bg-gray-500/[0.2] rounded m-5 p-3 h-16' >
    <form onSubmit={onSubmitHandler} className=' flex   '>
      <input value={newTask} onChange={(e) => (setNewTask(e.target.value))} placeholder='New task' className=' h-8  w-full px-3 py-2 mr-1 bg-gray-600 text-white border border-gray-600 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <Button>Add</Button>
    </form>
  </div>
}

function Button({ children, onClick }) {
  return <button onClick={onClick} className=" h-8 bg-white  p-1 px-4 mx-2 text-sm font-bold rounded cursor-pointer" > {children}</button >
}

function Tasks({ tasks, tasksNumber, deletBtnHandler, clearAllHandler }) {

  return <div className=' bg-gray-500/[0.2] rounded m-5 p-3 divide-y divide-[#888] ' >

    <div className='flex justify-between pb-4 pt-1 '>

      <span className='flex items-center content-center'> <h1 className='text-white font-bold px-1 '>Tasks</h1><span className=' bg-white rounded-full px-2 mx-1 py-[1px] font-bold text-sm text-center'>{tasksNumber}</span> </span>
      <Button onClick={clearAllHandler} >Clear All</Button>

    </div>

    <div className=' h-96 p-5  mx-1 overflow-y-auto max-h-[55vh] dark-scrollbar'>
      <ul className='grid sm:grid-cols-3 gap-5 '>
        {tasks.map((task) => (<Task task={task} key={task.id} deletBtnHandler={deletBtnHandler} />))}

      </ul>
    </div>

  </div >

}

function Task({ task, deletBtnHandler }) {

  return <li className='bg-white/15 p-3 rounded text-center text-white   '>
    <div className='flex justify-end mb-1 text-[12px]'><span onClick={() => (deletBtnHandler(task))} className=' cursor-pointer'>❌</span></div>

    <div className='flex flex-col h-full pb-6  justify-between '>
      <p className='text-md  p-4   text-wrap font-bold'>{task.todo}</p>
      <p className=' text-[13px] pt-3 border-t border-[#888] border-dashed'>{task.date}</p>
    </div>

  </li>
}
