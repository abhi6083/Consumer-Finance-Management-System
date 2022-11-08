package com.finance.Service;

import java.util.List;

import com.finance.Model.Card;
import com.finance.Model.ProductHistory;
import com.finance.Model.User;

public interface FinanceService {
	public List<ProductHistory> getProducts(int regid);
	public List<User> getAllDetails();
	public User getDetailsByRegId(long regid);
	public String addDetails(User userDet);
	public Card getCardDetailsByRegId(long regid);

}
