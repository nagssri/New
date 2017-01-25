package com.test.springboot;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Arrays;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@SpringBootApplication
public class MainClass 
{

    public static void main(String[] args) {
        ApplicationContext ctx = SpringApplication.run(MainClass.class, args);

        System.out.println("Let's inspect the beans provided by Spring Boot:");

        String[] beanNames = ctx.getBeanDefinitionNames();
        Arrays.sort(beanNames);
        for (String beanName : beanNames) {
            System.out.println(beanName);
        }
    }
    
    @Configuration
	@Profile("default")
	static class LocalConfiguration {
    
    @Value("${purl}")
    private String databaseUri;
    	    
	@Bean
	public Connection connection() {
	        Connection con = null;
			try {
				con = DriverManager.getConnection(databaseUri);
				System.out.println("*** Creating HBASE connection******");
			} catch (SQLException e) {
				e.printStackTrace();
				//System.out.println("Connection fail: ", e.printStackTrace());
			}

		//dataSource.setDriverClassName("org.apache.phoenix.jdbc.PhoenixDriver");
		System.out.println("*********Initialized hbase**********8");
		
		return con;
	}
    }

}