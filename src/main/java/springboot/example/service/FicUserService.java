package springboot.example.service;

import springboot.example.domain.FicUser;

import java.util.List;

public interface FicUserService {

    /**
     * 方法描述
     *
     * @param: 
     * @return: 
     * @exception: 
     * @date: 2019/4/15 17:45
     */
    List<FicUser> queryAll();
}
