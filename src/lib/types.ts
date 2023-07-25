import type { Timestamp } from 'firebase/firestore';

export type TransactionType = {
    id: string;
    date: Timestamp;
    amount: number;
    category: string;
};

export type UserType = {
    id: string;
    email: string;
};
