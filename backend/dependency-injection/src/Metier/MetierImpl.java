package Metier;

import Dao.IDao;

public class MetierImpl implements IMetier
{
    private IDao Dao ;

    public void setDao(IDao dao)
    {
        Dao = dao;
    }

    @Override
    public double Calcul()
    {
        double temp = Dao.getData() ;
        double res  = (temp*540)/(Math.cos(temp*Math.PI));
        return res ;
    }
}
