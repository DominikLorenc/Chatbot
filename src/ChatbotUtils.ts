
import type { IChatbotUtils, QuestionsType } from './types';

const chatbotUtils: IChatbotUtils = class ChatbotUtils {
    static createElmentWithClass = <T extends HTMLElement>(className: string, typeElement = 'div') => {
        const element = document.createElement(typeElement);
        element.className = className;
        return element as T;
    };

    static addElement = (parentElement: Element, childElement: Element) => {
        parentElement.appendChild(childElement);
    };

    static setdivWithImg = (classNameDiv: string, src: string) => {
        const div = this.createElmentWithClass(classNameDiv);
        const img = this.createElmentWithClass(`${classNameDiv}-icon`, 'img');
        img.setAttribute('src', src);

        this.addElement(div, img);
        return div;
    };

    static createDivWithElements = (parent: HTMLElement, ...childElement: HTMLElement[]) => {
        childElement.forEach((child) => this.addElement(parent, child));
    };

    static addAttributes = (element: Element, attributes: string[][]) => {
        attributes.forEach((attribut) => {
            element.setAttribute(attribut[0], attribut[1]);
        });
    };

    static getElement = (elementClassName: string) => {
        if (document.querySelector(elementClassName) === null) {
            throw new Error(`Element ${elementClassName} is not exist`);
        }

        return document.querySelector(elementClassName) as HTMLElement;
    };

    static delay = (time: number, callback: Function) => {
        setTimeout(() => callback(), time);
    };

    static getArrayElementById = (array: QuestionsType, id: string) => {
        const doesElementExist = array.filter((el) => el.id === id);

        if (doesElementExist.length === 0) {
            throw new Error('not found element');
        }

        return doesElementExist[0];
    };

    static setAnimation = (elementToAnimation: HTMLElement, animationName: string) => {
        elementToAnimation.style.animation = animationName;
    };
};

export default chatbotUtils;
