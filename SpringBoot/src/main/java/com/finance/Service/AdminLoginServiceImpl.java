package com.finance.Service;

import com.finance.Model.admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.finance.Repository.AdminLoginRepository;

@Service
@Transactional
public class AdminLoginServiceImpl implements AdminLoginService {
     
	@Autowired
	AdminLoginRepository adminloginrepo;
     
	@Override
	public admin findAdmin(String aname) {
		
	return adminloginrepo.findUserByAname(aname);
	}
}