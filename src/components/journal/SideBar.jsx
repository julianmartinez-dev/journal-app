import React from 'react'
import JournalEntries from './JournalEntries'

const SideBar = () => {
  return (
    <aside className='journal__sidebar'>
        <div className="journal__sidebar-navbar">
            <h3 className='mt-5'>
                <i className="fas fa-moon mr-5"></i>
                <span>Julian</span>
            </h3>

            <button className='btn mt-5'>
                Logout
            </button>
        </div>

        <div className='journal__new-entry'>
            <i className="far fa-calendar-plus fa-4x"></i>
            <h3 className='mt-5'>New Entry</h3>
        </div>

        <JournalEntries />
    </aside>
  )
}

export default SideBar