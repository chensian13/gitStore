package springboot.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import springboot.example.domain.FicUser;
import springboot.example.service.FicUserService;

@Controller
public class Front {
    @Autowired
    private FicUserService ficUserService;

    @RequestMapping("/flay")
    public String helloUsers(){
        for(FicUser ficUser:ficUserService.queryAll()){
            System.out.println(ficUser);
        }
        return "f";
    }

}
