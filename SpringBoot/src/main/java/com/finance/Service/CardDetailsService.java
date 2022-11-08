package com.finance.Service;

import com.finance.Model.Card;

import java.util.List;


public interface CardDetailsService {
	public boolean updateBalance(long regid,int price);
	public List<Card> getProducts();
	
	
	//SNEHA PART
	public List<Card> getCarddetails();
	
	
	public boolean updateCard(long regid);
	
	public Card findCard(long regid);
	public boolean deleteCard(long regid);
	
	public boolean addCard(Card card);
}
