import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        router.push('?counter=10', undefined, { shallow: true });
    }, []);

    useEffect(() => {
        console.log('The counter changed!');
    }, [router.query.counter]);

    return null;
}

