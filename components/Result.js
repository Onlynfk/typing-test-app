import React from 'react'

function Result({ correct, incorrect, words }) {
    return (
        <div className='section '>
            <div className=' row align-items-start  text-center '>
                <div className='col'>
                    <h4 className=''>Words :</h4>
                    <p className='has text-primary display-4'>{correct}</p>

                </div>
                <div className='col'>
                    <h4 className=''>Total Scorce in words :</h4>
                    <p className=' text-bold text-primary display-3'>{correct} of {words.length}</p>

                </div>
                <div className='col'>
                    <h4 className=''>Accuracy :</h4>
                    <p className='text-info display-4'>
                        {Math.round((correct / (correct + incorrect)) * 100)} %
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Result