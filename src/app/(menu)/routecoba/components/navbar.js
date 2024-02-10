"use client"
import React from 'react';
import Link from 'next/link'
export default function Navbargation()
{
    return (<header>
        <div>All Link</div>
        <nav>
            <ul>
                <li>
                    <Link href="/cobarouter/all">Dashboard</Link>
                </li>
                <li>
                    <Link href="/cobarouter/metting">Metting</Link>
                </li>
                <li>
                    <Link href="/cobarouter/dashblys">Dasmbly</Link>
                </li>
            </ul>
        </nav>
    </header>)
}