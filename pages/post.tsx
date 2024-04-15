import {useRouter} from 'next/router';
import React from "react";

export default function post() {
    const router = useRouter();

    return (
        <>
            <button onClick={() => router.push('/about')}>
               This is Post Page Go to About Page
            </button>
        </>
    );
}