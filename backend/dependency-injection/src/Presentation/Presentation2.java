package Presentation;

import Dao.IDao;
import Metier.IMetier;

import java.io.File;
import java.io.FileNotFoundException;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Scanner;

public class Presentation2 {
    public static void main(String[] args) throws FileNotFoundException, ClassNotFoundException,
            InstantiationException, IllegalAccessException, NoSuchMethodException, InvocationTargetException {

        /*
         * Dependency Injection using Dynamic Instantiation
         * -----------------------------------------------
         * Instead of hardcoding class dependencies (e.g., new DaoImpl()), we:
         * 1. Read class names from a configuration file (`config.txt`).
         * 2. Load the corresponding classes dynamically at runtime.
         * 3. Instantiate objects and inject dependencies using reflection.
         */

        // Step 1: Read class names from config.txt
        Scanner scanner = new Scanner(new File("src/config.txt")); // Open config file
        String daoClassName = scanner.nextLine();  // Read first line (DAO class name)

        // Step 2: Dynamically load the DAO class
        Class cDao = Class.forName(daoClassName);  // Load class by name
        IDao dao = (IDao) cDao.newInstance();  // Instantiate dynamically
        System.out.println(dao.getData());  // Call getData() method from the loaded DAO instance
        System.out.println("-------------------------------------------");

        // Step 3: Read Metier class name from the second line of config.txt
        String metierClassName = scanner.nextLine();
        Class cMetier = Class.forName(metierClassName);  // Load Metier class
        IMetier metier = (IMetier) cMetier.newInstance(); // Instantiate dynamically

        // Step 4: Use reflection to call `setDao()` method in Metier class
        Method method = cMetier.getMethod("setDao", IDao.class);  // Find setDao(IDao) method
        method.invoke(metier, dao);  // Inject the DAO instance into the Metier instance

        // Step 5: Call business logic method `Calcul()` and display result
        System.out.println("Resultats : " + metier.Calcul());

        // Close the scanner
        scanner.close();
    }
}
