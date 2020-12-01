import React from 'react'
import Axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataku: []
        }
    }

    componentDidMount () {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res) => {
            console.log(res)
            this.setState({dataku: res.data})
        })
        .catch((err) => console.log(err))
    }

    render () {
        const data = this.state.dataku.map((item, index)=>{
            var id_title = [item.id,item.title].join(" - ");
            return <li key={index}>{id_title}</li> 
        })

        console.log(this.state.dataku)
        return (
            <div>
                <h1>Hello Axios</h1>
                {data}
            </div>
        )
    }
}

export default App