"use client"
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button';
export default function Backbutton()
{
    const router = useRouter()
    return (<Button variant="contained" type='button' onClick={() => router.back()}>Link</Button>)
}