'use client'

import React from 'react'

type Props = {
    Component: React.ComponentType<any>
}

export function MDXRenderer({ Component }: Props) {
    return <Component />
}