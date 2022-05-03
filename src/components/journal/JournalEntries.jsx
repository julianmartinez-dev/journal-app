import React from 'react'
import Entry from './Entry'

const JournalEntries = () => {

    const entries = [1,2,3,4,5,6,7,8,9,10]


  return (
    <div className='journal__entries'>
        <h3>Entries</h3>
        {
            entries.map(entry => (
                <Entry key={entry} entry={entry}/>
            ))
        }
    </div>
  )
}

export default JournalEntries