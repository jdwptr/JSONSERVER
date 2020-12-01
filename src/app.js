import React from 'react'
import Axios from 'axios'
import {
    Button,
    Table,
    Form,
} from 'react-bootstrap'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dbUser: []
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/users')
            .then((res) => {
                console.log(res.data)
                this.setState({ dbUser: res.data })
            })
            .catch((err) => console.log(err))

    }

    btnEdit = () => {
        console.log('btn edit di klik')
        {this.tableInput()}
    }

    tableHead = () => {
        return (
            <thead>
                <tr>
                    <th>#</th>
                    <th>First_Name</th>
                    <th>Last_Name</th>
                    <th>Email</th>
                    <th style={{margin: 'auto'}}>Action</th>
                </tr>
            </thead>
        )
    }

    tableBody = () => {
        let { dbUser } = this.state
        return (
            <tbody>
                {dbUser.map((item, index) => {
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Button onClick={this.btnEdit} style={{ marginRight: '10px' }}>EDIT</Button>
                                <Button>DELETE</Button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }

    tableInput = () => {
        return (
            <tbody>
                <tr>
                    <td>#</td>
                    <td>
                        <Form.Control type='text' placeholder='Enter First Name' ref='firstname' />
                    </td>
                    <td>
                        <Form.Control type='text' placeholder='Enter Last Name' ref='lastname' />
                    </td>
                    <td>
                        <Form.Control type='email' placeholder='Enter Email' ref='email' />
                    </td>
                    <td>
                        <Button onClick={this.btnSubmit}>SUBMIT</Button>
                    </td>
                </tr>
            </tbody>
        )
    }

    tableSemua = () => {
        return (
            <Table>
                {this.tableHead()}
                {this.tableBody()}
                {this.tableInput()}
            </Table>
        )
    }

    btnSubmit = () => {
        // get data
        let first_name = this.refs.firstname.value
        let last_name = this.refs.lastname.value
        let email = this.refs.email.value
        console.log(first_name, last_name, email)

        Axios.post('http://localhost:2000/users', {
            first_name,
            last_name,
            email
        })
            .then((res) => {
            console.log(res.data)
                Axios.get('http://localhost:2000/users')
                    .then((res) => {
                        console.log(res.data)
                        this.setState({ dbUser: res.data })
                    })
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }

    render() {
        console.log(this.state.dbUser)
        return (
            <div>
                <h1>TUGAS TABEL</h1>
                {this.tableSemua()}
            </div>
        )
    }
}

export default App