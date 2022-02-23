import ChatbotStore from './ChatbotStore';
import ChatbotElementCreator from './ChatbotElementCreator';
import ChatbotLogic from './ChatbotLogic';

class ChatbotController {
    store: ChatbotStore;

    constructor(store: ChatbotStore) {
        this.store = store;
        const chatbotLogic = new ChatbotLogic(this.store);
        const elementCreator = new ChatbotElementCreator(this.store, chatbotLogic);
        elementCreator.createLuncher();
    }
}

export default ChatbotController;

// jest
// funkcyjne z ts

// getMyAge "11a" -> błąd, że string nie ma samych numerów
// arrayMethods
// pagination
