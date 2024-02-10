import Showindex from "./components/showme"
import Layout from './components/layout'
import Backbutton from './components/backbutton'
import Link from 'next/link'

export const metadata = {
    title: 'coba Route',
    description: 'Generated by create next app',
}

export default function Home()
{
    return (
        <Layout>
            <Backbutton/>
        </Layout>
    )
}