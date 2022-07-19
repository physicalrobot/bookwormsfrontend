import { useState } from "react"
function BookClubs({ user }) {


    function hello() {
        user.map((stuff) => (
            console.log(stuff.name)
        ))

    }

    return (
        <div>
            <h1>bookclubs</h1>
            <button onClick={hello}>poopsicle</button>
        </div>
    )

}

export default BookClubs