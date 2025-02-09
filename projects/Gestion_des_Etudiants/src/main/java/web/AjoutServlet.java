package web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

import metier.Etudiant_Methodes;

/**
 * Servlet implementation class AjoutServlet
 */
@WebServlet("/AjoutServlet")
public class AjoutServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AjoutServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
private Etudiant_Methodes etds ;
	
	public void init() throws ServletException 
	{
		etds = new Etudiant_Methodes();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		try
		{
			EtudiantModele etudiantmodele = new EtudiantModele();
		
			etudiantmodele.setNom(request.getParameter("nom"));
			etudiantmodele.setPrenom(request.getParameter("prenom"));
			etudiantmodele.setEmail(request.getParameter("email"));
			etudiantmodele.setFiliere(request.getParameter("filiere"));
		
			boolean rs = etds.ajouterEtudiant(etudiantmodele);
		
			if (rs == true ) 
			{
				System.out.println("Ajout reussi!");
			}
			else
			{
				throw new Exception("Etudiant n´est pas Ajouter");
			}
		}
		catch (Exception e )
		{
			System.out.println("erreur : " + e.getMessage());
		}
	}

}
