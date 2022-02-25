import type { QuestionsType } from './types';
import { v4 as uuidv4 } from 'uuid';

const questions: QuestionsType = [
    {
        id: uuidv4(),
        question: 'Contact',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore repellendus ipsa ipsum ducimus id explicabo? Quaerat est accusantium praesentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo?',
    },
    {
        id: uuidv4(),
        question: 'Company Info',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore repellendus ipsa ipsum ducimus id',
    },
    {
        id: uuidv4(),
        question: 'Feature',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tempore repellendus ipsa ipsum ducimus id explicabo? Quaerat est  sit amet consectetur adipisicing elit. Dicta, nemo?',
    },

    {
        id: uuidv4(),
        question: 'Sales',
        answer: 'Lorem ipsusentium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nemo?',
    },
];

export default questions;
