/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'

class GenListe extends React.Component {
    render() {

        return (
            <tr> <td>{this.props.annonces.poste}</td>
                <td>{this.props.annonces.employeur}</td>
               
                <td>{this.props.annonces.nomCompagnie}</td>
                <td>{this.props.annonces.salaire}</td>
                <td>{this.props.annonces.emplacement}</td>
                <td>{this.props.annonces.description}</td>
               
                <td>
                    
                <Link to={"/postuler/" + this.props.annonces._id}>Postuler</Link> 
                </td>
            </tr>
        )
    }
}
export default GenListe;