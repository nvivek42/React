const person = {}
const submitData = (e) => {
    e.preventDefault();
    const personName = e.target.elements.personName.value
    person.name = personName
    const personAddress = e.target.elements.address.value
    person.address = personAddress
    const personPhone = e.target.elements.phone.value
    person.phone = personPhone
    const personEmail = e.target.elements.email.value
    person.email = personEmail

    render()
}
const render = () => {
    
    const template = (
   
        <div>
            <form onSubmit= {submitData}>
                <div>
                    name: <input type="text" name="personName"></input>
                </div>
                <div>
                    address: <input type="text" name="address"></input>
                </div>
                <div>
                    phone: <input type="text" name="phone"></input>
                </div>
                <div>
                    email: <input type="text" name="email"></input>
                </div>
                <button type="submit" >submit</button>
            </form>
            <div>
                <hr/>
                <div>person name: { person.name ? person.name : "--NA--" } </div>
                <div>person address: { person.address ? person.address : "--NA--"} </div>
                
                { person.phone  && <div>phone: {person.phone} </div> }
                { person.email  && <div>email: {person.email} </div> }
            </div>
        </div>
    
    )

    const root = document.getElementById('app')
    ReactDOM.render(template,root)
}

render();