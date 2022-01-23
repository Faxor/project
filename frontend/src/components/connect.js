import React from "react";

class ExampleDownload extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"http://localhost:8000/api/")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        
   
        return (
        <div>
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    User_Name:<br></br> { item.title }, 
                    Full_Name:<br></br> { item.author }, 
                    Exerpt: <br></br>{ item.excerpt } 
                    Content:<br></br> { item.content } 
                    Status: <br></br>{ item.status } 
                    </ol>
                    
                ))
            }
        </div>
    );
}
}
   
export default ExampleDownload;