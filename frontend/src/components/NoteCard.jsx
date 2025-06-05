import React from 'react'

const NoteCard = ({note}) => {
  

  // console.log(note)
  return (
    <div className='w-40 h-50 bg-yellow-300 rounded-2xl mt-1.5 p-1.5 content-center m-1 overflow-y-scroll flex flex-col align-middle justify-between'>
    <h2 className=' tracking-tighter font-mono'>{note.title}</h2>
      <p>{note.content}
      </p>
      <p className='text-.5'>
      Date:{note.createdAt.split(":")[0].slice(0,10)}
      </p>
    </div>
  )
}

export default NoteCard;