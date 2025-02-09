package web;


import java.io.IOException;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import metier.Etudiant_Methodes;





/**
 * Servlet implementation class ControleurServlet
 */
@WebServlet("/Vue")
public class ControleurServlet extends HttpServlet {
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ControleurServlet() {
        super();
        // TODO Auto-generated constructor stub
    }
    
    private Etudiant_Methodes etds;

    @Override
    public void init() throws ServletException {
        etds = new Etudiant_Methodes(); // Initialiser le 
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
		// Declaration De Writer Pour Afficher Les Erreur ;
				
				try{
					
				EtudiantModele modele = new EtudiantModele();
				
				modele.setList(etds.afficherEtudiant());
				request.setAttribute("modele", modele);
				request.getRequestDispatcher("Vue.jsp").forward(request , response);
				}
				catch (Exception e)
				{
					System.out.println(e.getMessage());
				}
	}

	 
	protected void doPost(HttpServletRequest request,HttpServletResponse response) throws ServletException ,IOException {
		// TODO Auto-generated method stub
       String id = request.getParameter("id"); 
		
		if ("modifier".equals(request.getParameter("action")))
		{
			try
			{
				EtudiantModele etdmodele = etds.getEtudiantParId(Integer.parseInt(id));
				
				request.setAttribute("etdmodele", etdmodele);
				request.setAttribute("id", id);
				request.getRequestDispatcher("Vuemodif.jsp").forward(request , response);
				
				
			}
			catch(Exception e)
			{
				System.out.println("erreur " + e.getMessage());
			}
		}
		
		else if ("supprimer".equals(request.getParameter("action")))
		{
			try{
				if (etds.supprimerEtudiant(Integer.parseInt(id)))
				{
					response.sendRedirect("Vue");
				}
				
				else
				{
					throw new Exception("Etudiant non supprimé");
				}
			}
			catch (Exception e)
			{
				System.out.println(e.getMessage());
			}
		}
	}
}
			
		