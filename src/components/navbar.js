import React from "react";
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
class navbar extends React.Component{
    render(){
        return(
            <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul class="navbar-nav mr-auto">
            
            <li class="nav-item">
                <a class="nav-link" >Dashboard</a>
            </li>

			<li class="nav-item dropdown">
				<a data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">Candidat <b class="caret"></b></a>
				<ul class="dropdown-menu" >					
					<li><a class="dropdown-item" href="#">Liste des Offres</a></li>
					<li><a class="dropdown-item" href="#">Categories</a></li>
					<li><a  class="dropdown-item" href="#">Ajouter votre Cv</a></li>
					<li><a class="dropdown-item" href="#">Lettre de Motivation</a></li>
				</ul>
			</li>

			<li class="nav-item dropdown">
				<a data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">Employeur <b class="caret"></b></a>
				<ul class="dropdown-menu" >					
					<li><a class="dropdown-item" href="AddOffer">Ajouter une offre</a></li>
					<li><a class="dropdown-item" href="#">Web</a></li>
					<li><a class="dropdown-item" href="#">Liste des Candidatss</a></li>
				
				</ul>
			</li>

            <li class="nav-item">
                <a class="nav-link" href="#">About Us</a>
            </li>
        </ul>
    </div>
    <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="#">JOB OFFER</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ml-auto">
		<li class="nav-item dropdown">
				<a data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">Sign Up <b class="caret"></b></a>
				<ul class="dropdown-menu" >					
					<li><a class="dropdown-item" href="SignUP">Candidat</a></li>
					<li><a class="dropdown-item" href="#">Employeur</a></li>
					
				
				</ul>
			</li>
			<li class="nav-item dropdown">
				<a data-toggle="dropdown" class="nav-link dropdown-toggle" href="#">Login <b class="caret"></b></a>
				<ul class="dropdown-menu" >					
				<li><a class="dropdown-item" href="#">Candidat</a></li>
					<li><a class="dropdown-item" href="#">Employeur</a></li>
				
				</ul>
			</li>
        </ul>
    </div>
</nav>
        )}}

        export default navbar;