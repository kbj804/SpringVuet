package com.izt.api;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class WebConfig implements WebMvcConfigurer{

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**") //모든 요청에 대해서
                .allowedOrigins("http://localhost:8081"); //허용할 오리진들
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) { // 기본 resourceHandler 유지하면서 추가
//        registry.addResourceHandler("static/**")
//                .addResourceLocations("classpath:/static/") // '/'으로 끝나도록
//                .setCachePeriod(20);
//        registry.addResourceHandler("/css/**").addResourceLocations("/css/**");
//        registry.addResourceHandler("/img/**").addResourceLocations("/img/**");
//        registry.addResourceHandler("/js/**").addResourceLocations("/js/**");
//        registry.addResourceHandler("/vendor/**").addResourceLocations("/vendor/**");


        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/static/") // '/'으로 끝나도록
                .setCachePeriod(20);

    }
}

