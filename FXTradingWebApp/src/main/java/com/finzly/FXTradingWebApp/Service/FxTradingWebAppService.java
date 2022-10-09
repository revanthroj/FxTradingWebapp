package com.finzly.FXTradingWebApp.Service;

import java.util.List;

import com.finzly.FXTradingWebApp.Dao.FxTradingWebAppDao;
import com.finzly.FXTradingWebApp.Entity.FxTradingWebAppEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FxTradingWebAppService {
	
	@Autowired
	private FxTradingWebAppDao dao;
	
	public FxTradingWebAppEntity booktrade(FxTradingWebAppEntity obj) {
		return dao.save(obj);
	}

	public List<FxTradingWebAppEntity> printTrade() {
		return dao.findAll();
	}
	
}
