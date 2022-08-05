import React, { useState } from "react";
import Link from 'next/link';
import Body from "../components/body";


function index() {
    const [toggle, setToggle] = useState(false);
    const [counter, setCounter] = useState("");
    const [counterDefault, setcounterDefault] = useState(0)

    function handleClickCounter(value) {
        setcounterDefault(value)
    }

    function handleInputTimer(e) {
        setCounter(e.target.value)
    }

    function toggleHandler() {
        if (counter != 0) {
            setcounterDefault(counter)
        }
        if (counterDefault != 0) {
            setToggle(true)
        }
    }
    console.log(counterDefault)
    return (
        <div className="mt-5">
            {toggle === false ?

                <div className="px-4 py-5 my-5 text-center ">
                    <h1 className="display-5 fw-bold">Welcome to the Typing Challenge</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Pick a time in minutes below or input one for the challenge ⤵️ </p>
                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <button type="button" onClick={handleClickCounter = () => setcounterDefault(1)} className="btn btn-primary btn-sm px-4 gap-3">1</button>
                            <button type="button" onClick={handleClickCounter = () => setcounterDefault(2)} className="btn btn-outline-secondary btn-sm px-4">2</button>
                            <button type="button" onClick={handleClickCounter = () => setcounterDefault(3)} className="btn btn-outline-secondary btn-sm px-4">3</button>
                            <button type="button" onClick={handleClickCounter = () => setcounterDefault(4)} className="btn btn-outline-secondary btn-sm px-4">4</button>
                            <input type="number" onClick={handleInputTimer} className="timer-input" placeholder='input one' />
                        </div>

                        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mt-5">
                            {counterDefault != 0 && <button onClick={toggleHandler} className="btn btn-primary btn-lg mt-4 px-4 gap-3">Let's Get Started ⏭️</button>


                            }
                        </div>
                    </div>
                </div> :
                <Body
                    counter={counterDefault}
                />
            }
        </div>
    )
}

export default index