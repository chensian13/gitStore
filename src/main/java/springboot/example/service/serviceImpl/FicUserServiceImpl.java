package springboot.example.service.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import springboot.example.dao.FicUserDao;
import springboot.example.domain.FicUser;
import springboot.example.service.FicUserService;

import java.util.ArrayList;
import java.util.List;

/**
* @Description:    <p></p>
* @Author:         陈思安
* @CreateDate:     2019/4/15 17:31
* @Version:        1.0
*/
@Service
public class FicUserServiceImpl implements FicUserService{
    @Autowired
    private FicUserDao ficUserDao;

    @Override
    public List<FicUser> queryAll(){
        System.out.println("进入业务层方法!");
        List<FicUser> list=ficUserDao.selectAll();
        return list;
    }
}
