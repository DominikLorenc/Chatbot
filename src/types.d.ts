import ChatbotStore from './ChatbotStore';
import ChatbotLogic from './ChatbotLogic';

interface IChatbotLogic {
    store: ChatbotStore;
    openChat: (createChatFn: Function) => void;
    closeChat: () => void;
    toggleAnimation: (
        typeAction: TypeAction,
        chatbotLuncherWrapper: HTMLElement,
        chatWrapper: HTMLElement,
    ) => never | void;
    switchButton: (e: Event) => void;
    handleForm: (e: Event, input: HTMLInputElement) => void;
    filterInputValue: (value: string) => string;
    createMassage: (typeUser: UserTypes, textMessage: string) => HTMLElement;
    addMessageToConversation: (message: HTMLElement) => void;
    createQuestionsMessage: () => void;
    createQuestions: (questionsWrapper: HTMLElement) => void;
    selectQuestion: (id: string) => void;
    removeQuestionMessage: () => void;
}

interface IChatbotElementCreator {
    store: ChatbotStore;
    logicChatbot: ChatbotLogic;
    createLuncher: () => void;
    createTopBarChat: () => HTMLElement;
    createChat: () => void;
    createConersation: () => HTMLElement;
    createTyping: () => HTMLElement;
}

interface IChatbotUtils {
    createElmentWithClass: <T extends HTMLElement>(className: string, typeElement?: string) => T;
    addElement: (parentElement: Element, childElement: Element) => void;
    setdivWithImg: (classNameDiv: string, src: string) => HTMLElement;
    createDivWithElements: (parent: HTMLElement, ...childElement: HTMLElement[]) => void;
    addAttributes: (element: Element, attributes: string[][]) => void;
    getElement: (elementClassName: string) => HTMLElement;
    delay: (time: number, callback: () => void) => void;
    getArrayElementById: (array: QuestionsType, id: string) => IQuestions;
    setAnimation: (elementToAnimation: HTMLElement, animationName: string) => void;
}

interface IQuestions {
    id: string;
    question: string;
    answer: string;
}

type QuestionsType = Array<IQuestions>;
type UserTypes = 'user' | 'chatbot';
type TypeAction = 'open' | 'close';

export type { IChatbotElementCreator, IChatbotLogic, UserTypes, TypeAction, IChatbotUtils, QuestionsType };
