package com.izt;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DemoController {
        @RequestMapping("/")
        public String hi(){
            System.out.println(" ############### MAIN PAGE LODE ############### ");
            return "index";
        }
}
