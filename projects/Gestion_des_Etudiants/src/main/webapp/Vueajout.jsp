<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Ajouter Étudiant</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    form {
        background-color: #ffffff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 300px;
    }
    form input[type="text"],
    form input[type="submit"],
    form input[type="reset"] {
        width: 100%;
        padding: 10px;
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
    }
    form input[type="submit"] {
        background-color: #4CAF50;
        color: white;
        border: none;
        cursor: pointer;
    }
    form input[type="submit"]:hover {
        background-color: #45a049;
    }
    form input[type="reset"] {
        background-color: #f44336;
        color: white;
        border: none;
        cursor: pointer;
    }
    form input[type="reset"]:hover {
        background-color: #d32f2f;
    }
    form h2 {
        text-align: center;
        color: #333;
    }
</style>
</head>
<body>
   <form action="Ajouter" method="post">
        <input type="text"   name="nom"    placeholder="nom" required><br>
        <input type="text"   name="prenom" placeholder="prenom" required><br>
        <input type="text"   name="email"  placeholder="email" required><br>
        <input type="text"   name="filiere" placeholder="filliere" required><br>
        <input type="submit" name="submit" id="submit" value="Ajouter">
        <input type="reset"  name="reset" id="reset" value="Annuler">
    </form>
</body>
</html>