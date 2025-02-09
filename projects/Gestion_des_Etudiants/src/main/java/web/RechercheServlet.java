package web;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import metier.Etudiant_Methodes;

import java.io.IOException;




/**
 * Servlet implementation class RechercheServlet
 */
@WebServlet("/rechercher")
public class RechercheServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RechercheServlet() {
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
		String recherche = request.getParameter("nom");
			
		EtudiantModele modele = new EtudiantModele();
			
		modele.setList(etds.rechercherEtudiant(recherche));
	
		request.setAttribute("modele",modele);
		request.getRequestDispatcher("Vue.jsp").forward(request , response);
		}
		catch (Exception e)
		{
			System.out.println(e.getMessage());
		}
	
	}

}
