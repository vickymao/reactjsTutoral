import React from 'react';
class App extends React.Component{
    constructor() {
      super();
      this.state = {
         data: 
         [
            {
               "id":1,
               "name":"Foo",
               "age":"20"
            },
            {
               "id":2,
               "name":"Bar",
               "age":"30"
            },
            {
               "id":3,
               "name":"Baz",
               "age":"40"
            }
         ]
      }
      
   }
    render(){
        
        
        return(
            
            <div>
               <Header/>
               <Content contentProp = {this.state.data}/>
               
            </div>
        );
    }
}
class Header extends React.Component{
    render(){
        var myStyle = {
            fontSize : 100,
            color:'#FF0000'
        }
        return(
            <div><h1 style={myStyle}>Header</h1></div>
        );
    }
}
class Content extends React.Component{
    render(){
        
        return(
            <div>
                <table>
                <tbody>
                   {this.props.contentProp.map((person, i) => <TableRow key = {i} 
                      data = {person} />)}
                </tbody>
             </table>
            </div>
        );
    }
}
class TableRow extends React.Component{
    render(){
        return(
        <tr>
            <td>{this.props.data.id}</td>
            <td>{this.props.data.name}</td>
            <td>{this.props.data.age}</td>
         </tr>
        );
    }
}
export default App;