package Extension;

import Dao.IDao;

public class DaoImpl2 implements IDao
{
    public double getData()
    {
        /*
            Se Connecter A la BD et Recuperer la temperateure ;
         */
        System.out.println("Version Capteurs ");
        double temp = Math.random()*40 ;
        return  temp;
    }
}
