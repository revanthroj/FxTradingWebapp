package com.finzly.FXTradingWebApp.Controller;

import java.sql.SQLException;
import java.util.List;

import com.finzly.FXTradingWebApp.Entity.FxTradingWebAppEntity;
import com.finzly.FXTradingWebApp.Service.FxTradingWebAppService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FxTradingWebAppController {

	@Autowired
	private FxTradingWebAppService service;
	
	@PostMapping("/bookTrade")
	public FxTradingWebAppEntity bookTrade(@RequestBody FxTradingWebAppEntity obj) throws SQLException {
		return service.booktrade(obj);
	}
	
	@GetMapping("/printTrade")
	public List<FxTradingWebAppEntity> printTrade() {
		return service.printTrade();
	}
	
	
}