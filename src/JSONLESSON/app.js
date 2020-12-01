import React from 'react'
import Axios from 'axios'
import {
    Button,
} from 'react-bootstrap'

class App extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            dbUsers: []
        }
    }

    componentDidMount () {
        Axios.get ('http://localhost:2000/users')
        .then ((res) => {
            console.log(res.data)
            this.setState ({dbUsers: res.data})
        })
        .catch ((err) => console.log(err))
    }

    btnPost = () => {
        console.log('btn post di klik')
        Axios.post ('http://localhost:2000/users', {
            first_name: 'San',
            last_name: 'Fran',
            email: 'sanfran34@gmail.com'
        })
        .then ((res) => console.log(res.data))
        .catch ((err) => console.log(err))
    }

    btnDelete = () => {
        console.log('btn del di klik')
        Axios.delete ('http://localhost:2000/users/6')
        .then ((res) => console.log(res.data))
        .catch ((err) => console.log(err))
    }

    btnEdit = () => {
        Axios.put ('http://localhost:2000/users/4', {
            first_name: 'Los',
            last_name: 'Angeles',
            email: 'LAX34@yahoo.com'
        })

    }

    render() {
        console.log(this.state.dbUsers)
        return (
            <div>
                <h1>HELLO JSON SERVER</h1>
                <Button onClick={this.btnPost}>POST</Button>
                <Button onClick={this.btnDelete}>DELETE</Button>
                <Button onClick={this.btnEdit}>EDIT</Button>
            </div>
        )
    }
}

export default App

// NOTE
// U/ ngubah OBJECT ke JSON, memakai JSON.stringify(namavariabelobject yg mau diubah)
// u/ ngubah JSON ke OBJECT, memakai JSON.parse(namavariabeljson yg mau diubah)

// NOTE
// CRUD (put, patch, post, delete, and get)
// POST => menambahkan data baru kedalam users
// PUT => menambahkan data baru kedalam users
// BEDANYA POST DAN PUT