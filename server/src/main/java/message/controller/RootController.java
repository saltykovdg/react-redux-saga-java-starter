package message.controller;

import message.model.Message;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@RestController
public class RootController {
    private List<String> messages = new ArrayList<>();

    @PostConstruct
    private void init() {
        messages.add("Message 1");
        messages.add("Message 2");
    }

    @RequestMapping(value = "/message", method = RequestMethod.POST)
    public Message addMessage(@RequestBody Message message) {
        messages.add(message.getText());
        return message;
    }

    @RequestMapping(value = "/message/list", method = RequestMethod.GET)
    public List<String> getMessages() {
        return messages;
    }
}
