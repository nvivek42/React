const person = {}
const submitData = (e) => {
    e.preventDefault();
    const personName = e.target.elements.personName.value
    person.name = personName
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
                <div>person name: { person.name } </div>
                <div>person address: { person.address } </div>
                <div>person phone: { person.phone } </div>
                <div>person email: { person.email } </div>

            </div>
        </div>
    
    )

    const root = document.getElementById('app')
    ReactDOM.render(template,root)
}

render();