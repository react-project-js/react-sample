import React from 'react';
import axios from 'axios'; 

/*const per = [
    {Name: 'arun', Age: 21},
    {Name: 'jack', Age: 22},
    {Name: 'moorthi', Age: 23},
    {Name: 'tamil', Age: 24},
    {Name: 'natu', Age: 25},
];

let arrayset = [];

let split = () => {
    let splitSize =2, size = per.length/splitSize;
    for(let i=0;i<size;i++) {
        let temp = i*splitSize;
        arrayset.push(per.slice(temp,temp+splitSize));
    }
}

split();
console.log(arrayset);*/

//let per = [];




const tstyle={border: '1px solid black'};

class Sample extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
        per: [],
    }
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
    componentDidMount () {
        axios.get('http://localhost:3001')
            .then( response => {
                if(response.data) {
                    this.setState({per: response.data});
                }
        });
    }
    next () {
        axios.get('http://localhost:3001/next')
        .then( response => {
            if(response.data) {
                this.setState({per: response.data});
            }
    });
    }
    previous () {
        axios.get('http://localhost:3001/pre')
        .then( response => {
            if(response.data) {
                this.setState({per: response.data});
            }
    });
    }
    render() {
        return (
            <div>
                <table style={tstyle}>
                    {this.state.per?this.state.per.map(per=>(<tr><td style={tstyle}>{per.Name}</td><td style={tstyle}>{per.Age}</td></tr>)):null}  
                </table>
                <button onClick={this.previous}>Previous</button>
                <button onClick={this.next}>Next</button>
            </div>
        );
    }
}


export default Sample;