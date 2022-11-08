package com.finance.Repository;

import com.finance.Model.admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminLoginRepository extends JpaRepository<admin, Long> {
 public admin findUserByAname(String aname);
}
