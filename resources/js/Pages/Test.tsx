import { InertiaLink } from '@inertiajs/inertia-react';
import { Head } from '@inertiajs/inertia-react';
import React from 'react';
import useRoute from '@/Hooks/useRoute';

interface Props {
    str: String;
}

export default function Test({ str }: Props) {
    const route = useRoute();

    return (
        <div>
            <Head title="Test" />

            <InertiaLink href={route('home')}>
                Test
            </InertiaLink>

            <br />

            <p>
                {str}
            </p>
        </div>
    );
}
