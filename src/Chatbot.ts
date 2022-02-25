import ChatbotStore from './ChatbotStore';
import ChatbotController from './ChatbotController';
import type { QuestionsType } from './types';
import questions from './utils';

class Chatbot {
    constructor(questions: QuestionsType) {
        if (questions.length === 0) throw new Error('Array with questions is empty');

        const store = new ChatbotStore(questions);
        const controller = new ChatbotController(store);
    }
}

const chat = new Chatbot(questions);
