import { Timestamp } from 'firebase/firestore';

import type { PageLoad } from './$types';

export const csr = true;
export const ssr = true;
export const prerender = false;

export const load = (({ params }) => {
    return {
        id: params.id,
        date: Timestamp.fromDate(new Date()),
        amount: 50,
        category: 'Food'
    };
}) satisfies PageLoad;
