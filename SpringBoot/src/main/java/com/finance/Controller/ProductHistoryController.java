package com.finance.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.finance.Model.ProductHistory;
import com.finance.Service.ProductHistoryService;

@RestController
@CrossOrigin(origins = "http://localhost:3000" )
@RequestMapping("/producthistory/api")
public class ProductHistoryController {
	@Autowired
	ProductHistoryService prodhistService;
	@PostMapping("/ph")
	public boolean addProduct(@RequestBody ProductHistory prodhist) {
		return prodhistService.addProduct(prodhist);
				
	}
	@GetMapping("/ph")
	public List<ProductHistory> getAll(){
		return prodhistService.viewProduct();
	}

	@GetMapping("/ph/{regid}")
	public List<ProductHistory> findByRegid(@PathVariable(value="regid") long regid){
		return prodhistService.findByRegid(regid);
	}
	
}
