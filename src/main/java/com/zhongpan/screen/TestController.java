package com.zhongpan.screen;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @RequestMapping("/sendToScreen")
    public String sendToScreen(String message){
        WebSocketServerScreen.sendControlMessage(message);
        return message;
    }
}
