import React from 'react'

function Paragraph({words, getCharClass}) {
  return (
    <div className='section'>
          <div className='container'>
                {words.map((word, i) => (
                  <span key={i}>
                    <span>
                      {word.split("").map((char, idx) => (
                        <span className={getCharClass(i, idx, char)} key={idx}>{char}</span>
                      ))}
                    </span>
                    <span> </span>
                  </span>
                ))}

              </div>
        </div>
  )
}

export default Paragraph