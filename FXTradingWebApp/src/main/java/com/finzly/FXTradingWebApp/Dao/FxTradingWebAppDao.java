package com.finzly.FXTradingWebApp.Dao;

import java.util.List;

import com.finzly.FXTradingWebApp.Entity.FxTradingWebAppEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FxTradingWebAppDao extends JpaRepository<FxTradingWebAppEntity, Long> {
	
}
