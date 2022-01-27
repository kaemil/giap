import Link from 'next/link';

export default function Home({ computers }) {
	return (
		<div>
			<ul>
				{computers.map((e) => (
					<li key={e.id}>
						<Link href={`/komputer/${e.id}`}>
							<a>{e.name}</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:3333/computers');
	const computers = await res.json();

	return { props: { computers } };
}
