package web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import metier.Etudiant_Methodes;

import java.io.IOException;





/**
 * Servlet implementation class ModifServlet
 */
@WebServlet("modifier")
public class ModifServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ModifServlet() {
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
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String id = request.getParameter("id");
		

		try{
			EtudiantModele etudiantmodele = new EtudiantModele();
		
			etudiantmodele.setId(Integer.parseInt(id));
			etudiantmodele.setNom(request.getParameter("nom"));
			etudiantmodele.setPrenom(request.getParameter("prenom"));
			etudiantmodele.setEmail(request.getParameter("email"));
			etudiantmodele.setFiliere(request.getParameter("filiere"));
		
			boolean rs = etds.editerEtudiant(etudiantmodele);
			
		
			if (rs == true ) 
			{
				response.sendRedirect("home");
			}
			else
			{
				throw new Exception("Etudiant n´est pas Modifier");
			}
		}
		catch (Exception e )
		{
			System.out.println("erreur: " + e.getMessage());
		}
	}

}
