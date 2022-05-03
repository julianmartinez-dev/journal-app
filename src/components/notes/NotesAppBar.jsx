import React from 'react'

const NotesAppBar = () => {
  return (
    <div className="notes__appbar">
      <span>9 de julio de 2022</span>

      <div>
        <button className="btn mr-5">Picture</button>
        <button className="btn">Guardar</button>
      </div>
    </div>
  );
}

export default NotesAppBar