import { useState } from 'react'

export const UncontrolledForm = () => {
    return(

        <form>
            <label htmlFor = "firstname">
                First name: 
                <input name= "firstname" placeholder="Enter your name here"></input>
            </label>

            <label htmlFor = "lastname">
                Last name: 
                <input id= "lastname" placeholder="Enter your last name here"></input>
            </label>

            <label htmlFor = "email">
                Email: 
                <input id= "email" placeholder="Enter your email here"></input>
            </label>
        </form>

        
    )
}