package springboot.example.dao;

import org.springframework.stereotype.Repository;
import springboot.example.domain.FicUser;

import java.util.List;

/**
* @Description:    <p></p>
* @Author:         陈思安
* @CreateDate:     2019/4/15 17:22
* @Version:        1.0
*/
@Repository
public interface FicUserDao {
    List<FicUser> selectAll();
}
