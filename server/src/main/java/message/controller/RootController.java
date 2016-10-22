package message.controller;

import message.model.Message;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@RestController
public class RootController {
    private List<Message> messages = new ArrayList<>();

    @PostConstruct
    private void init() {
        messages.add(new Message("Message 1", false));
        messages.add(new Message("Message 2", false));
    }

    @RequestMapping(value = "/message", method = RequestMethod.POST)
    public Message addMessage(@RequestBody Message message) {
        messages.add(message);
        return message;
    }

    @RequestMapping(value = "/message/list", method = RequestMethod.GET)
    public List<Message> getMessages() {
        return messages;
    }
}
