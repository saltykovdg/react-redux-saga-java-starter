package message.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Message {
    private String text;

    @JsonProperty(value = "use_intl")
    private boolean useIntl;

    public Message() {
    }

    public Message(String text, boolean useIntl) {
        this.text = text;
        this.useIntl = useIntl;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public boolean getUseIntl() {
        return useIntl;
    }

    public void setUseIntl(boolean useIntl) {
        this.useIntl = useIntl;
    }

    @Override
    public String toString() {
        return "Message{" +
                "text='" + text + '\'' +
                ", useIntl=" + useIntl +
                '}';
    }
}
