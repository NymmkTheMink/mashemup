package com.mashemup.mashemup;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;

@SpringBootApplication
public class MashemupApplication {

	public static void main(String[] args) {
		SpringApplication.run(MashemupApplication.class, args);

	}

	@RequestMapping("/")
	public String home() {
		return "index";
	}

}
