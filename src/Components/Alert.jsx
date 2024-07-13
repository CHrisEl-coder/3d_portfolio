
const Alert = ({type, text}) => {
  return (
    
    <div className=' absolute top-10 left-0 right-0 flex justify-center items-center font-semibold font-mono '>
      <div className={`${type === 'danger' ? ' bg-red-800 ' : ' bg-emerald-800'} py-2 px-8 rounded-sm flex items-center`} role='alert'>
         <p className={`${type === 'danger' ? 'bg-red-600 py-1 px-3' : 'bg-emerald-500 py-1 px-3'} text-white font-poppins mr-7 text-xs`} >{`${type === 'danger' ? 'Failed' : 'Success'}`}</p>
         <p className=' mr-3 text-left'>{text}</p>
      </div>
    
    
    </div>
  )
}

export default Alert