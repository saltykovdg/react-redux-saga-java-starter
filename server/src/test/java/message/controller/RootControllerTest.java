package message.controller;

import message.Application;
import message.model.Message;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.*;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT, classes = {Application.class})
public class RootControllerTest {
    private final Logger logger = LoggerFactory.getLogger(getClass());

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void messageList() {
        List<Message> messages = new ArrayList<>();
        messages.add(new Message("Message 1", false));
        messages.add(new Message("Message 2", false));
        ResponseEntity<List<Message>> responseEntity = restTemplate.exchange("/message/list", HttpMethod.GET, null, new ParameterizedTypeReference<List<Message>>() {});
        assertThat(HttpStatus.OK).isEqualTo(responseEntity.getStatusCode());
        assertThat(messages.toString()).isEqualTo(responseEntity.getBody().toString());
    }

    @Test
    public void message() {
        Message message = new Message();
        message.setText("test message 1");
        message.setUseIntl(false);
        ResponseEntity<Message> responseEntity = restTemplate.postForEntity("/message", message, Message.class);
        assertThat(HttpStatus.OK).isEqualTo(responseEntity.getStatusCode());
        assertThat(message.toString()).isEqualTo(responseEntity.getBody().toString());
    }
}
