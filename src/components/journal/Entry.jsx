import React from 'react'

const Entry = ({ entry }) => {
  return (
    <div className="journal__entry">
      <div
        className="journal__entry-picture"
        style={{
          backgroundImage: `url(https://techblog.sdstudio.top/wp-content/uploads/2021/09/ba11d056cec27254d89b310745e4071b-1.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      ></div>

      <div className='journal__entry-body'>
          <p className='journal__entry-title'>Titulo: un nuevo dia</p>
          <p className='journal__entry-content'>Lorem ipsum dolor sit amet consectetur </p>
      </div>

        <div className='journal__entry-date-box'>
            <span>Monday</span>
            <h4>28</h4>
        </div>
    </div>
  );
}

export default Entry