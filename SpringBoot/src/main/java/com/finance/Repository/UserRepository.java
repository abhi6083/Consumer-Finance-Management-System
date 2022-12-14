package com.finance.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.finance.Model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

	public User findUserByUname(String uname);
	public User findUserByEmail(String Email);
	public User findUserByRegid(long Id);

	
}