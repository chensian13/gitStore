package springboot.example;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springboot.example.domain.FicUser;
import springboot.example.service.FicUserService;

/**
* @Description:    <p></p>
* @Author:         陈思安
* @CreateDate:     2019/4/15 16:28
* @Version:        1.0
*/
@SpringBootApplication
@MapperScan("springboot.example.dao")
@RestController
public class Application {
    @Autowired
    private FicUserService ficUserService;

    @RequestMapping("/")
    public String helloUsers(){
        System.out.println("Hello World!");
        for(FicUser ficUser:ficUserService.queryAll()){
            System.out.println(ficUser);
        }
        return "hello";
    }

    public static void main(String[] arg){
        SpringApplication.run(Application.class,arg);
    }



}
