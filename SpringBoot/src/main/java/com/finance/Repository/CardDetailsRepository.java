package com.finance.Repository;

import com.finance.Model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface CardDetailsRepository extends JpaRepository<Card, Long> {
	
//	@Query("update Carddetails u set u.availbal = :u.availbal-?2 where u.regid = :?1")
//	void updateBalance(int id,int price);
	 Card findByRegid(Long regid);
}
