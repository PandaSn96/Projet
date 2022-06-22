import React from "react";
import Gen from "./genliste.js"
import axios from 'axios'
/*let utils = [{code:"GreMa" ,nom:'Grenier', prenom:'Marc'},
{code:"DanyD" ,nom:'Grenier', prenom:'Marc'},{code:"SuperSaiyan" ,nom:'Kun', prenom:'Sangoku'},];*/
class liste extends React.Component{
    constructor (props){
        super(props);
        this.state={
            annonces:[]
        }
    }
    componentDidMount(){
        //this.setState({utilisateurs:utils})
        axios.get('http://localhost:3115/api/annonces')
        .then(response=>{
            console.log(response.data);
            if(response.data.length > 0){
                this.setState({
                    annonces:response.data
                })
            }
        })
        .catch((error)=>{
            console.log(error);
        })
    }
    annonceList (){
        return this.state.annonces.map(annCourant =>{
            return  <Gen annonces={annCourant}  key={annCourant._id}/>;
        })
       
    }
   
    render(){
        
        return(
            <div className="container">
                 <h3>Liste des annonces</h3>
                 <table className="table">
                 <thead className="thead-light">
                 <tr>
                 <th>poste</th>
                 <th>employeur</th>
                 <th>nomCompagnie</th>
                 <th>salaire</th>
                 <th>emplacement</th>
                 <th>description</th>
                 </tr>
                 </thead>
                 <tbody>
                     {this.annonceList ()}
                     </tbody>
                     </table>
                     </div>

                  
        )
       
    }
}
export default liste;


