import React, { useState, useEffect, useRef } from 'react'
import CountDown from './CountDown'
import Input from './Input'
import Paragraph from './Paragraph'
import Result from './Result'

import generateWords from '../utils/generateWords'

function Body({ counter }) {
  const SECONDS = counter * 60
  const [words, setWords] = useState([])
  const [countDown, setCountDown] = useState(SECONDS)
  const [currentInput, setCurrentInput] = useState("")
  const [correct, setCorrect] = useState(0)
  const [incorrect, setInCorrect] = useState(0)
  const [currentWordIndex, setcurrentWordIndex] = useState(0)
  const [currentCharIndex, setcurrentCharIndex] = useState(-1)
  const [currentCharVariable, setcurrentCharVariable] = useState("")

  const [status, setStatus] = useState("waiting")
  const textInput = useRef(null)


  useEffect(() => {
    setWords(generateWords())
    setCountDown(SECONDS)
  }, [SECONDS])

  useEffect(() => {
    if (status === "started") {
      textInput.current.focus()
    }
  }, [status])


  function startTimer() {
    if (status === 'finished') {
      setWords(generateWords());
      setcurrentWordIndex(0);
      setCorrect(0);
      setInCorrect(0);
      setcurrentCharIndex(-1)
      setcurrentCharVariable("")
    }
    if (status != 'started') {
      setStatus("started");

      let interval = setInterval(() => {
        setCountDown((prevCountDown) => {
          if (prevCountDown == 0) {
            clearInterval(interval);
            setStatus("finished");
            setCurrentInput("")
            return SECONDS
          } else {
            return prevCountDown - 1
          }
        })
      }, 1000)
    }


  }

  function handleChangeInput(e) {
    setCurrentInput(e.target.value)
  }

  function handleKeyDown({ keyCode, key }) {
    if (keyCode === 32) {
      checkMatch()
      setCurrentInput("")
      setcurrentWordIndex(currentWordIndex + 1);
      setcurrentCharIndex(-1);

    } else if (keyCode === 8) {
      setcurrentCharIndex(currentCharIndex - 1);
      setcurrentCharVariable("")

    }

    else {
      setcurrentCharIndex(currentCharIndex + 1);
      setcurrentCharVariable(key)
    }
  }

  function checkMatch() {
    const wordToCompare = words[currentWordIndex]
    const doesItMatch = wordToCompare === currentInput.trim()
    if (doesItMatch) {
      setCorrect(correct + 1)
    } else {
      setInCorrect(incorrect + 1)
    }
  }

  function getCharClass(wordIndex, charIndex, char) {
    if (wordIndex === currentWordIndex && charIndex === currentCharIndex && currentCharVariable && status != 'finished') {
      if (char === currentCharVariable) {
        return 'bg-success'
      } else {
        return 'bg-danger'
      }
    }
    else if (wordIndex === currentWordIndex && currentCharIndex > words[currentWordIndex].length) {
      return 'bg-danger'
    }

    else {
      return ''
    }

  }

  return (
    <div className="container">
      <div className="px-4 py-5 my-5 text-center">

        <CountDown
          countDown={countDown}
        />




        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4"></p>
          <div className="container">

            <Input
              textInput={textInput}
              status={status}
              handleChangeInput={handleChangeInput}
              handleKeyDown={handleKeyDown}
              currentInput={currentInput}
            />

          </div>


          <div className="d-grid gap-2 mt-5 d-sm-flex justify-content-sm-center">
            <button onClick={startTimer} type="button" className="btn btn-primary btn-lg px-4 gap-3">Start Typing </button>
          </div>
        </div>


      </div>

      {status === "started" &&
        <Paragraph
          getCharClass={getCharClass}
          words={words}
        />}

      {status === "finished" &&
        <Result
          correct={correct}
          incorrect={incorrect}
          words={words}
          timer={countDown}
        />

      }




    </div>

  )
}

export default Body