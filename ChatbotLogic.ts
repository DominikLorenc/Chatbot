import ChatbotUtils from './ChatbotUtils';
import ChatbotStore from './ChatbotStore';
import type { TypeAction, UserTypes, IChatbotLogic } from './types';
import { SHOW_ANIMATION, HIDE_ANIMATION } from './constans';
import icons from './assets/icons';

class ChatbotLogic implements IChatbotLogic {
    store: ChatbotStore;

    constructor(store: ChatbotStore) {
        this.store = store;
    }

    openChat = (createChatFn: Function) => {
        const chatbotLuncherWrapper = ChatbotUtils.getElementExist('.chatbot__luncher');

        if (this.store.isChatCreated) {
            const chat = ChatbotUtils.getElementExist('.chat');
            this.toggleAnimation('open', chatbotLuncherWrapper, chat);
        } else {
            this.store.isChatCreated = true;
            createChatFn();
            ChatbotUtils.setAnimation(chatbotLuncherWrapper, HIDE_ANIMATION);
        }
    };

    closeChat = () => {
        const chatbotLuncherWrapper = ChatbotUtils.getElementExist('.chatbot__luncher');
        const chat = ChatbotUtils.getElementExist('.chat');
        this.toggleAnimation('close', chatbotLuncherWrapper, chat);
    };

    toggleAnimation = (typeAction: TypeAction, chatbotLuncherWrapper: HTMLElement, chatWrapper: HTMLElement) => {
        switch (typeAction) {
            case 'open':
                ChatbotUtils.setAnimation(chatWrapper, SHOW_ANIMATION);
                ChatbotUtils.setAnimation(chatbotLuncherWrapper, HIDE_ANIMATION);
                break;
            case 'close':
                ChatbotUtils.setAnimation(chatWrapper, HIDE_ANIMATION);
                ChatbotUtils.setAnimation(chatbotLuncherWrapper, SHOW_ANIMATION);
                break;
            default:
                throw new Error('Unknown action');
        }
    };

    switchButton = (e: Event) => {
        const icon = ChatbotUtils.getElementExist('.chat__typing__submit-icon');

        const target = e.target as HTMLInputElement;
        if (target.value.length > 0) {
            ChatbotUtils.addAttributes(icon, [['src', icons.sendIcon]]);
        } else {
            ChatbotUtils.addAttributes(icon, [['src', icons.offIcon]]);
        }
    };

    handleForm = (e: Event, input: HTMLInputElement) => {
        e.preventDefault();
        const value = input.value;
        const filterKeyWordResult = this.filterInputValue(value);

        this.removeQuestionMessage();

        this.addMessageToConversation(this.createMassage('user', value));

        this.addMessageToConversation(this.createMassage('chatbot', filterKeyWordResult));

        ChatbotUtils.delay(1000, this.createQuestionsMessage);
        input.value = '';

        const icon = ChatbotUtils.getElementExist('.chat__typing__submit-icon');
        ChatbotUtils.addAttributes(icon, [['src', icons.offIcon]]);
    };

    filterInputValue = (value: string) => {
        const filterInputValue = this.store.questions.filter((el) => {
            return el.question.toLowerCase() === value.toLowerCase();
        });

        return filterInputValue.length === 0 ? 'Not found fraze' : filterInputValue[0].answer;
    };

    createMassage = (typeUser: UserTypes, textMessage: string) => {
        const messageWrapper = ChatbotUtils.createElmentWithClass('chat__conversation__message');
        const messageContent = ChatbotUtils.createElmentWithClass('message', 'p');
        messageContent.textContent = textMessage;

        ChatbotUtils.createDivWithElements(messageWrapper, messageContent);

        switch (typeUser) {
            case 'user':
                messageWrapper.classList.add('chat__conversation__message--user');
                return messageWrapper;
            case 'chatbot':
                messageWrapper.classList.add('chat__conversation__message--chatbot');
                return messageWrapper;
            default:
                throw new Error(`This ${typeUser} is not exsit.`);
        }
    };

    addMessageToConversation = (message: HTMLElement) => {
        const conversation = ChatbotUtils.getElementExist('.chat__conversation'); // getElement
        ChatbotUtils.addElement(conversation, message);
    };

    createQuestionsMessage = () => {
        const questionsWrapper = ChatbotUtils.createElmentWithClass('questions');
        const selectMessage = this.createMassage('chatbot', 'Select Question:');
        ChatbotUtils.addElement(questionsWrapper, selectMessage);

        this.createQuestions(questionsWrapper);
        this.addMessageToConversation(questionsWrapper);
    };

    createQuestions = (questionsWrapper: HTMLElement) => {
        this.store.questions.forEach(({ id, question }) => {
            const questionElement = ChatbotUtils.createElmentWithClass('question');
            questionElement.textContent = question;
            questionElement.addEventListener('click', () => this.selectQuestion(id));
            ChatbotUtils.addElement(questionsWrapper, questionElement);
        });
    };

    selectQuestion = (id: string) => {
        const { question, answer } = ChatbotUtils.filterId(this.store.questions, id);

        this.addMessageToConversation(this.createMassage('user', question));
        this.addMessageToConversation(this.createMassage('chatbot', answer));

        this.removeQuestionMessage();
        ChatbotUtils.delay(1000, this.createQuestionsMessage);
    };

    removeQuestionMessage = () => {
        const questions = ChatbotUtils.getElementExist('.questions');
        questions.remove();
    };
}

export default ChatbotLogic;
