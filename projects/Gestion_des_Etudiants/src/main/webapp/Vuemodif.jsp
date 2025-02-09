<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="web.EtudiantModele"%>
<%@page import="metier.Etudiant"%>
<%@page import="java.util.List"%>

<%
    EtudiantModele etudiantModele;

    if (request.getAttribute("etdmodele") != null) 
    {
        etudiantModele = (EtudiantModele) request.getAttribute("etdmodele");
    } else 
    {
        etudiantModele = new EtudiantModele(); 
    }
    
    String id = (String) request.getAttribute("id");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Modifier Étudiant</title>
<style> 
body { 
font-family: Arial, sans-serif; 
background-color: #f4f4f4; 
margin: 0; 
padding: 20px; 
} 
form { 
background-color: #fff; 
padding: 20px; 
border-radius: 8px; 
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); 
max-width: 400px; 
margin: 0 auto; 
} 
label { 
display: block; 
margin-bottom: 8px; 
color: #333; 
} 
input[type="text"], 
input[type="submit"], 
input[type="reset"] { 
width: 100%; 
padding: 10px; 
margin-bottom: 10px; 
border: 1px solid #ccc; 
border-radius: 4px; 
box-sizing: border-box; 
} 
input[type="submit"], 
input[type="reset"] { 
background-color: #5cb85c; 
color: white; 
border: none; 
cursor: pointer; 
} 
input[type="submit"]:hover, 
input[type="reset"]:hover { 
background-color: #4cae4c; 
} 
input[type="reset"] { 
background-color: #d9534f; 
} 
input[type="reset"]:hover { 
background-color: #c9302c;
}
</style>
</head>
<body>
    <!-- Formulaire de modification -->
    <form action="modifier" method="post">
        	<input type="hidden" name="id"  value="<%= id %>"><br>
        
            <label for="nom">Nom:</label>
            <input type="text" name="nom" placeholder="Nom" value="<%= etudiantModele.getNom() %>" required><br>
            
            <label for="prenom">Prénom:</label>
            <input type="text" name="prenom" placeholder="Prénom" value="<%= etudiantModele.getPrenom() %>" required><br>
            
            <label for="email">Email:</label>
            <input type="text" name="email" placeholder="Email" value="<%= etudiantModele.getEmail() %>" required><br>
            
            <label for="filiere">Filière:</label>
            <input type="text" name="filiere" placeholder="Filière" value="<%= etudiantModele.getFiliere() %>" required><br>
            
            <input type="submit" name="submit" id="submit" value="Modifier">
            <input type="reset"  name="reset"  id="reset" value="Annuler">
        </form>
</body>
</html>