import React from 'react'
import Axios from 'axios'
import {
    Card,
    Button,
} from 'react-bootstrap'

let url = 'http://newsapi.org/v2/top-headlines?country=id&apiKey='
let key = '51c9cd4791df43c9805672b649f203e7'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            berita: []
        }
    }

    componentDidMount() {
        Axios.get(url + key)
            .then((response) => {
                console.log(response)
                this.setState({ berita: response.data.articles })
            })
            .catch((error) => console.log(error))
    }

    showCardNews = () => {
        return this.state.berita.map((item, index) => {
            return (
                <Card style={{ width: '18rem', marginRight: '25px'}} key={index}>
                    <Card.Img variant="top" src={item.urlToImage} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button href={item.url} variant="primary" >Read more</Button>
                    </Card.Body>
                </Card>
            )
        })
    }

    render() {
        console.log(this.state.berita)
        return (
            <div>
                <h1>NEWS API</h1>
                <div  style={{display: 'flex', flexWrap: 'wrap'}}>
                    {this.showCardNews()}
                </div>
            </div>
        )
    }
}

export default App