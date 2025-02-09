package metier;

import java.sql.Connection;
import java.sql.DriverManager;

public class SingletonConnection {
	
	static {
		String url="jdbc:mysql://localhost:3306/est";
		try {
			Class.forName("com.mysql.jc.jdbc.Driver");
			Connection conn=DriverManager.getConnection(url,"root","");
		}
		catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	private static Connection conn;
	public static Connection getConnection() {
		return conn;
	}

}
