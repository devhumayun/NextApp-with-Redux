import { RxCross1 } from 'react-icons/rx';

const TodoPages = () => {
  return (
    <div className="w-4/5 h-screen flex justify-center items-center">
      <div className="w-96 bg-[#e2e2e2] p-5 rounded-md">
        <form className="flex flex-col">
            <input className="form-input" type="text" placeholder="Name" />
            <input className="form-input" type="text" placeholder="piority" />
            <button className="bg-[blue] text-white p-2 rounded-md h hover:bg-[#4949e5]" type="submit"> Submit </button>
        </form>
        <div className="pt-5">
            <h2 className="text-2xl font-bold"> All Items </h2>
            <hr />
           <ul className='mt-3'>
              <li className='flex justify-between bg-[#fff] p-2 rounded-sm shadow-sm mb-2'>
                <span> Go to market </span>
                <RxCross1 className='cursor-pointer mt-1' />
              </li>
           </ul>
        </div>
      </div>
    </div>
  )
}

export default TodoPages
