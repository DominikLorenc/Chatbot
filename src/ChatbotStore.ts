import type { QuestionsType } from './types';

class ChatbotStore {
    rootElement: HTMLElement;
    questions: QuestionsType;
    isChatCreated: boolean;

    constructor(questions: QuestionsType) {
        this.rootElement = window.document.body;
        this.questions = questions;
        this.isChatCreated = false;
    }
}

export default ChatbotStore;
