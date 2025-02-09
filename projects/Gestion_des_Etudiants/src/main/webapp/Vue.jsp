<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page  import="web.EtudiantModele"%>
<%@page  import="metier.Etudiant"%>
<%@page  import="java.util.List"%>

<%
	EtudiantModele etdsModele ;

	if(request.getAttribute("modele") != null)
	{
		etdsModele = (EtudiantModele) request.getAttribute("modele");
	}
	else
	{
		etdsModele = new EtudiantModele(); 
	}
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <title>Vue Principale</title>
    <style> 
    body { 
    font-family: Arial, sans-serif; 
    background-color: #f4f4f4; 
    margin: 0; 
    padding: 20px; 
    } 
    h1 { 
    text-align: center; 
    color: #333; 
    } 
    form { 
    margin-bottom: 20px; 
    text-align: center; 
    } 
    input[type="text"] { 
    padding: 10px; 
    width: 300px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
    } 
    input[type="submit"] { 
    padding: 10px 20px; 
    border: none; 
    background-color: #5cb85c; 
    color: white; 
    border-radius: 4px; 
    cursor: pointer; 
    } 
    input[type="submit"]:hover { 
    background-color: #4cae4c; 
    } 
    .btn { 
    display: inline-block; 
    padding: 10px 20px; 
    background-color: #5bc0de; 
    color: white; 
    text-decoration: none; 
    border-radius: 4px; 
    margin-bottom: 20px; 
    } 
    .btn:hover { 
    background-color: #31b0d5; 
    } 
    table { 
    width: 100%; 
    border-collapse: collapse; 
    margin-top: 20px; 
    } 
    table, th, td { 
    border: 1px solid #ccc; 
    }
    th, td { 
    padding: 10px; 
    text-align: left; 
    } 
    th { 
    background-color: #f8f8f8; 
    } 
    tr:nth-child(even) { 
    background-color: #f9f9f9; 
    } 
    tr:hover { 
    background-color: #f1f1f1; 
    } 
    </style>
</head>
<body>
    <h1>Gestion des Étudiants</h1>
    
    <!-- Zone de recherche -->
    <form action="rechercher" method="POST">
        <input type="text" name="nom" placeholder="Rechercher un étudiant" required>
        <input type="submit" name="submit" id="search-btn" value="Search" placeholder ="rechercher">
    </form>

    <!-- Bouton Ajouter -->
    <div>
        <a href="Vueajout.jsp" class="btn">Ajouter</a>
    </div>

    <!-- Résultats de la recherche ou liste des étudiants -->
    <h2>Liste des Étudiants</h2>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Filiere</th>
                <th>Action</th>
            </tr>
<%
	List<Etudiant> etudiants = etdsModele.getEtudiants();
	for (Etudiant  etudiant  : etudiants) 
	{ %>
	<tr>
		<td><%=etudiant.getNom() %></td>
		<td><%=etudiant.getPrenom() %></td> 
		<td><%=etudiant.getEmail() %></td> 
		<td><%=etudiant.getFiliere() %></td>
		<td>
			<form action= "Vue?action=modifier" method = "post">
				<input type="hidden" name="id" value="<%= etudiant.getId()%>">
				<input type="submit" value="Modifier">
			</form>
			<form action= "Vue?action=supprimer" method = "post">
				<input type="hidden" name="id" value="<%= etudiant.getId()%>">
				<input type="submit" value="Supprimer">
			</form>
		</td>
	</tr>
	<% } %>
    </table>
</body>
</html>