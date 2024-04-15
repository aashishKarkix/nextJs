import React from 'react';
import {useRouter} from 'next/router';
import Link from "next/link";

export default function BlogPost() {
    const router = useRouter();
    const {slug} = router.query;

    return (
        <><h1>Blog Post: {slug}</h1>
            <li>
                <Link href="/blog"> Return to Blog
                </Link>
            </li>
        </>
    );
};

