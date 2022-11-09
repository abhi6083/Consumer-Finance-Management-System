package com.finance.Controller;

import java.util.List;

import com.finance.Model.Card;
import com.finance.Model.User;
import com.finance.Service.UserService;
import com.finance.Service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.finance.Service.CardDetailsService;

@RestController
@CrossOrigin(origins = "http://localhost:3000" )
@RequestMapping("/cardapi")
public class CardController {

	@Autowired
	UserService userService;
	@Autowired
	CardDetailsService cardService;
	@GetMapping("/updatebal/{regid}/{price}")
	public boolean updateBalance(@PathVariable(value="regid")int regid,@PathVariable(value ="price")int price) {
		
		return cardService.updateBalance(regid, price);
	}
	@GetMapping("/getallcards")
	public List<Card> getAll(){
		return cardService.getCarddetails();
	}

	@GetMapping("/findcard/{regid}")
	public Card getCard(@PathVariable(value="regid")int regid){
		return cardService.findCard(regid);
	}

	@GetMapping("/addcard/{regid}")
	public boolean Addcard(@PathVariable(value="regid")int regid){
		System.out.println("Nanda");
		User u= userService.findUserByRegid(Long.valueOf(regid));
		System.out.println(u);
        Card c=new Card();
		c.setRegid(regid);
		c.setCardno((int)(Math.random()*(90000-10001)+10000));
		c.setCardtype(u.getCardtype());
		c.setInitialbal(20000);
		c.setAvailbal(20000);
		return cardService.addCard(c);

	}

}
