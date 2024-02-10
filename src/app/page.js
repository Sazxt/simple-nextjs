import Image from 'next/image'
import styles from './page.module.css'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Link from 'next/link'

const people = [
	{
		name: 'Calvin Hawkins',
		email: 'calvin.hawkins@example.com',
		image:
			'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Kristen Ramos',
		email: 'kristen.ramos@example.com',
		image:
			'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
	{
		name: 'Ted Fox',
		email: 'ted.fox@example.com',
		image:
			'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
	},
]
export default function Home() {
	let style_containers = { marginTop: "20px" }
	return (
		<main className={styles.main}>
			<ul className="divide-y divide-gray-200">
				{people.map((person) => (
					<li key={person.email} className="py-4 flex">
						<img className="h-10 w-10 rounded-full" src={person.image} alt="" />
						<div className="ml-3">
							<p className="text-sm font-medium text-gray-900">{person.name}</p>
							<p className="text-sm text-gray-500">{person.email}</p>
						</div>
					</li>
				))}
			</ul>
			<Container>
				<Box sx={{ typography: 'body1' }}>
					<Card style={{ padding: "20px" }}>
						<Typography variant="h2">Testing Menu ~</Typography>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Link href="/routecoba">
								Link
							</Link>
						</div>
					</Card>
				</Box>
			</Container>
			<Container style={style_containers}>
				<Box sx={{ typography: 'body1' }}>
					<Card style={{ padding: "20px" }}>
						<Typography variant="h2">Testing aplikasi ~</Typography>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Button href="/" variant="contained">
								Link
							</Button>
						</div>
					</Card>
				</Box>
			</Container>
			<Container style={style_containers}>
				<Box sx={{ typography: 'body1' }}>
					<Card style={{ padding: "20px" }}>
						<Typography variant="h2">Testing aplikasi ~</Typography>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Button href="/" variant="contained">
								Link
							</Button>
						</div>
					</Card>
				</Box>
			</Container>
			<Container style={style_containers}>
				<Box sx={{ typography: 'body1' }}>
					<Card style={{ padding: "20px" }}>
						<Typography variant="h2">Testing aplikasi ~</Typography>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Button href="/" variant="contained">
								Link
							</Button>
						</div>
					</Card>
				</Box>
			</Container>
			<Container style={style_containers}>
				<Box sx={{ typography: 'body1' }}>
					<Card style={{ padding: "20px" }}>
						<Typography variant="h2">Testing aplikasi ~</Typography>
						<div style={{ display: "flex", justifyContent: "space-between" }}>
							<Button href="/" variant="contained">
								Link
							</Button>
						</div>
					</Card>
				</Box>
			</Container>
		</main>
	)
}
