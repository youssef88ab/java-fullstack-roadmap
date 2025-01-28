package Presentation;

import Dao.DaoImpl;  // Import the concrete DAO implementation
import Metier.MetierImpl;  // Import the concrete Metier implementation

public class Presentation {
    public static void main(String[] args) {
        /*
         * Dependency Injection using Static Instantiation
         * -----------------------------------------------
         * This approach manually creates objects using the `new` keyword.
         * The dependencies are hardcoded, meaning any changes require modifying this class.
         */

        // Step 1: Instantiate DAO (Data Access Object)
        DaoImpl dao = new DaoImpl();  // Creates an instance of DaoImpl

        // Step 2: Instantiate Metier (Business Logic Layer)
        MetierImpl metier = new MetierImpl();  // Creates an instance of MetierImpl

        // Step 3: Inject DAO into Metier
        metier.setDao(dao);  // Manually set the DAO instance

        // Step 4: Call the business logic method and print the result
        System.out.println(metier.Calcul());
    }
}
