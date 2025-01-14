import React, { useState } from "react";

const  QuestionOne = ({ questionNum, date, getDate }) => {
   
        
    return <div className='question flex'>
        <label htmlFor='date' >{questionNum}. When did you use our service?</label>
        <input 
        type='date' 
        id='date'
        value={date}
        min = '2022-01-01'
        max = '2022-20-01'
        onChange={(e) => getDate(e.target.value)}
        />
        
    </div>


}

export default QuestionOne