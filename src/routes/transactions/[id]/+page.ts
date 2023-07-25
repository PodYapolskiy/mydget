import { dev } from '$app/environment';
import { Timestamp } from 'firebase/firestore';

import type { PageLoad } from './$types';

// we don't need any JS on this page, though we'll load
// it in dev so that we get hot module replacement
export const csr = dev;

// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = false;

export const load = (({ params }) => {
    return {
        id: params.id,
        date: Timestamp.fromDate(new Date()),
        amount: 50,
        category: 'Food'
    };
}) satisfies PageLoad;
