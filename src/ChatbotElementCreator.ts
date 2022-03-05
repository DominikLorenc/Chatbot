import ChatbotStore from './ChatbotStore';
import ChatbotUtils from './ChatbotUtils';
import ChatbotLogic from './ChatbotLogic';
import type { IChatbotElementCreator } from './types';
import icons from './assets/icons';

class ChatbotElementCreator implements IChatbotElementCreator {
    store: ChatbotStore;
    logicChatbot: ChatbotLogic;

    constructor(store: ChatbotStore, logic: ChatbotLogic) {
        this.store = store;
        this.logicChatbot = logic;
    }

    createLuncher = () => {
        const { rootElement } = this.store;

        const chatbot = ChatbotUtils.createElmentWithClass('chatbot');

        const chatbotLuncher = ChatbotUtils.setdivWithImg('chatbot__luncher', icons.luncherIcon);

        ChatbotUtils.addElement(rootElement, chatbot);
        ChatbotUtils.addElement(chatbot, chatbotLuncher);

        chatbotLuncher.addEventListener('click', () => {
            this.logicChatbot.openChat(this.createChat);
        });
    };

    createTopBarChat = () => {
        const chatTop = ChatbotUtils.createElmentWithClass('chat__top');
        const chatTopAvatar = ChatbotUtils.setdivWithImg('chat__top-avatar', icons.topAvatarIcon);
        const chatTopName = ChatbotUtils.createElmentWithClass('chat__top-name');
        const chatClose = ChatbotUtils.setdivWithImg('chat__top-closeBtn', icons.closeIcon);

        chatTopName.textContent = 'ChatBot';

        ChatbotUtils.createDivWithElements(chatTop, chatTopAvatar, chatTopName, chatClose);

        chatClose.addEventListener('click', () => this.logicChatbot.closeChat());

        return chatTop;
    };

    createChat = () => {
        const rootChatElement = ChatbotUtils.createElmentWithClass('chat');
        const chatbot = ChatbotUtils.getElementExist('.chatbot');

        const chatTop = this.createTopBarChat();
        const chatConversation = this.createConersation();
        const chatTyping = this.createTyping();

        ChatbotUtils.addElement(chatbot, rootChatElement);
        ChatbotUtils.createDivWithElements(rootChatElement, chatTop, chatConversation, chatTyping);

        ChatbotUtils.delay(1000, this.logicChatbot.createQuestionsMessage);
    };

    createConersation = () => {
        const conversation = ChatbotUtils.createElmentWithClass('chat__conversation');

        return conversation;
    };

    createTyping = () => {
        const typing = ChatbotUtils.createElmentWithClass('chat__typing', 'form');
        const input = ChatbotUtils.createElmentWithClass<HTMLInputElement>('chat__typing-input', 'input');
        const submitButton = ChatbotUtils.createElmentWithClass('chat__typing__submit-btn', 'button');
        const submitButtonIcon = ChatbotUtils.createElmentWithClass('chat__typing__submit-icon', 'img');

        const attributesInput = [
            ['type', 'text'],
            ['placeholder', 'Twoja Wiadomość'],
            ['value', ''],
            ['required', 'true'],
        ];

        const atributesSubmitButtonIcon = [['src', icons.offIcon]];

        ChatbotUtils.addAttributes(submitButtonIcon, atributesSubmitButtonIcon);
        ChatbotUtils.addAttributes(input, attributesInput);

        ChatbotUtils.addElement(submitButton, submitButtonIcon);
        ChatbotUtils.createDivWithElements(typing, input, submitButton);

        typing.addEventListener('submit', (e) => this.logicChatbot.handleForm(e, input));
        input.addEventListener('input', (e) => this.logicChatbot.switchButton(e));

        return typing;
    };
}

export default ChatbotElementCreator;
