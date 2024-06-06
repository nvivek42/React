class App extends React.Component {
    render () {
        return (
            <div>
                <Header1 />
                <Header />
                <div>
                    <Header />
                </div>
            </div>
        )
    }
}

class Header1 extends React.Component {
    render () {
        return (
            <div>
            <h1>this is template</h1>
        </div>
        )
    }
}

class Header extends React.Component {
    render () {
        return (
            <div>
            <h1>this is div1</h1>
        </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));
