package com.finzly.FXTradingWebApp.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Component
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "fxtradewebapp")
public class FxTradingWebAppEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long tradeNo;
	private String username;
	private String currencyPair;
	private String transferAmount;
	private float tranferRate;
}
