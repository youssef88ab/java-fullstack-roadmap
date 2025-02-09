package metier;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import web.EtudiantModele;


public class Etudiant_Methodes {
	
	Connection conn=SingletonConnection.getConnection(); 
	
	//Methodes 
	//1-ajout d'un etudiant
	public boolean ajouterEtudiant(EtudiantModele etd)throws SQLException{
		String sql="INSERT INTO etudiant values (?,?,?,?,?)";
		try (PreparedStatement pstmt=conn.prepareStatement(sql)){
			pstmt.setInt(1, etd.getId());
			pstmt.setString(1, etd.getNom());
            pstmt.setString(2, etd.getPrenom());
            pstmt.setString(3, etd.getEmail());
            pstmt.setString(5, etd.getFiliere());
            int rs= pstmt.executeUpdate();
			if (rs==0) {return false;}
			else return false;
		}
		
	}
	
	//2-affichage d'étudiant
	public List<Etudiant> afficherEtudiant() throws SQLException {
		List<Etudiant> etds = new ArrayList<>();
		String sql = "SELECT * FROM etudiant";
		try (Statement stmt =conn.createStatement();
		     ResultSet rs = stmt.executeQuery(sql)){
			while (rs.next()) {
				Etudiant etd =new Etudiant();
				etd.setId(rs.getInt("nom"));
				etd.setNom(rs.getString("nom"));
                etd.setPrenom(rs.getString("prenom"));
                etd.setEmail(rs.getString("email"));
                etd.setFiliere(rs.getString("filiere"));
                etds.add(etd);
			}
		}
				
		return etds;
	}
	
	//3-suppression d'étudiant
	public boolean supprimerEtudiant (int id) throws SQLException {
		String sql = "DELETE FROM etudiant WHERE nom = ?";
		try(PreparedStatement pstmt= conn.prepareStatement(sql)){
			pstmt.setInt(1,id);
			int rs= pstmt.executeUpdate();
			if (rs==0) {return false;}
				else return false;
		}
	}
	
	//4-modification d'étudiant
	public boolean editerEtudiant(EtudiantModele etd) throws SQLException{
        String sql = "UPDATE etudiant SET id = ? ,nom = ?, prenom = ?, email = ?, filiere = ? WHERE id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
        	pstmt.setInt(1, etd.getId());
            pstmt.setString(1, etd.getNom());
            pstmt.setString(2, etd.getPrenom());
            pstmt.setString(3, etd.getEmail());
            pstmt.setString(4, etd.getFiliere());
            int rs=pstmt.executeUpdate();
            if (rs==0) {return false;}
            else return true;
        } 
	}
	
	//5-recherche d'étudiant par son nom
	public List<Etudiant> rechercherEtudiant(String nom) throws SQLException{
		List<Etudiant> etds = new ArrayList<>();
        String sql = "SELECT * FROM etudiant WHERE nom LIKE ?";
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {
            pstmt.setString(1, "%" + nom + "%");
            ResultSet rs=pstmt.executeQuery();
            while(rs.next()){
            	Etudiant etd =new Etudiant();
            	etd.setId(rs.getInt("id"));
            	etd.setNom(rs.getString("nom"));
            	etd.setPrenom(rs.getString("prenom"));
            	etd.setEmail(rs.getString("email"));
            	etd.setFiliere(rs.getString("filiere"));
            	etds.add(etd);
            	
            }
        }
        return etds;
	}
	
	//6-recherche par id
	public EtudiantModele getEtudiantParId(int id)throws SQLException{
		// Instanciation ;
		EtudiantModele etdModele = new EtudiantModele();
		String sql= "SELECT * FROM etudiant WHERE id = ? " ;
		
		try(PreparedStatement pstmt = conn.prepareStatement(sql)){	
			
			pstmt.setInt(1, id);
			ResultSet rs = pstmt.executeQuery();
			
			while(rs.next())
			{
				etdModele.setId(rs.getInt("id"));
				etdModele.setNom(rs.getString("nom"));
				etdModele.setPrenom(rs.getString("prenom"));
				etdModele.setEmail(rs.getString("email"));
				etdModele.setFiliere(rs.getString("filiere"));
			}
			
			return etdModele ;
	    	}
	}
}

