import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home({ computers }) {
	return (
		<div className={styles.container}>
			<Link href="/komputer/dodaj" passHref>
				<button className={styles.buttonAdd}>
					<a>Dodaj laptopa</a>
				</button>
			</Link>
			{computers.map((e) => (
				<Link key={e.id} href={`/komputer/${e.id}`} passHref>
					<button className={styles.button}>
						<a>{e.name}</a>
					</button>
				</Link>
			))}
		</div>
	);
}

export async function getStaticProps() {
	const res = await fetch('http://localhost:3333/computers');
	const computers = await res.json();

	return { props: { computers }, revalidate: 1 };
}
