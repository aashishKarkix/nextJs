import Link from "next/link";
import React from "react";

import post from '../../pages/post';
export default function Home() {
    return (
        <>
            <h1>This is Root</h1>
            <li>
                <Link href="/home">Home</Link>
            </li>
            <li>
                <Link href="/post"> post
                </Link>
            </li>
        </>
    );
}
