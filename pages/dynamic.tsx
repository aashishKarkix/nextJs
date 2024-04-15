import React from "react";
import Link from "next/link";

const DynamicPaths = () => {
    return (
        <div>
            <p>Dynamic Path Examples:</p>
            <ul>
                <li>
                    <Link href="/blog/post-1"> Blog post 1
                    </Link>
                </li>
                <li>
                    <Link href="/blog/post-2"> Blog post 2
                    </Link>
                </li>
                <li>
                    <Link href={`/blog/${encodeURIComponent('special-post')}`}> Blog post 3
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default DynamicPaths;