"use client"
// import { Navbargation } from "./navbar"
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
function Indexhome()
{
    return (<p>This home</p>)
}
function Metting()
{
    return (<p>This metting</p>)
}
function Dasmbly()
{
    return (<p>This metting</p>)
}

export default function Showindex()
{
    return (<div>
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
        <switch>
            <Route exact path="/cobarouter/all">
                <Indexhome />
            </Route>
            <Route path="/cobarouter/metting">
                <Metting />
            </Route>
            <Route path="/cobarouter/dashblys">
                <Dasmbly />
            </Route>
        </switch>
    </div>)
}