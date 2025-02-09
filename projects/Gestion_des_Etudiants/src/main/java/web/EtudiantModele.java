package web;


import java.util.*;
import metier.Etudiant;

public class EtudiantModele {
	
	private int id;
	private String nom;
	private String prenom ; 
	private String email ;
	private String filiere ;
	private List<Etudiant> Etudiants=new ArrayList<Etudiant>();
	
	
	//default constructor
	public EtudiantModele() {
		super();
	}
	
	//Constructor
	public EtudiantModele(int id ,String nom , String prenom , String email , String filiere)
	{
		this.id = id;
		this.nom = nom ; 
		this.prenom = prenom ; 
		this.email = email ;
		this.filiere = filiere ; 
	}
	
	//Getters
	
	public int getId() 
	{return id;}
	
	public String getNom() 
	{return nom;}
	
	public String getPrenom() 
	{return prenom;}
	
	public String getEmail() 
	{return email;}
	
	public String getFiliere() 
	{return filiere;}
	
	public List<Etudiant> getEtudiants()
	{return Etudiants;}	
	
	//Setters
	public void setId(int id) {
		this.id=id;
	}
	public void setNom(String nom) {
		this.nom=nom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public void setFiliere(String filiere) {
		this.filiere = filiere ;
	}
	public void setList(List<Etudiant> Etudiants) {
		this.Etudiants=Etudiants;
	}

}