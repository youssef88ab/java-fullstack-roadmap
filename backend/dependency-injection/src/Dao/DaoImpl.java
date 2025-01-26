package Dao;

public class DaoImpl implements IDao
{
    public double getData()
    {
        /*
            Se Connecter A la BD et Recuperer la temperateure ;
         */
        System.out.println("Version Base De Données");
        double temp = Math.random()*40 ;
        return  temp;
    }
}
