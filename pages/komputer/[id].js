import styles from '../../styles/SingleComputer.module.css';

function SingleComputer({ computers }) {
	return (
		<div className={styles.container}>
			<div>
				<span className={styles.span}>Nazwa:</span>
				<p className={styles.p}>{computers.name}</p>
			</div>
			<div>
				<span className={styles.span}>Opis:</span>
				<p className={styles.p}>{computers.description}</p>
			</div>
			<div>
				<span className={styles.span}>Cena:</span>
				<p className={styles.p}>{computers.price}</p>
			</div>
		</div>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	const res = await fetch(`http://localhost:3333/computers/${params.id}`);
	const computers = await res.json();

	return { props: { computers }, revalidate: 1 };
}

export async function getStaticPaths() {
	const res = await fetch('http://localhost:3333/computers');
	const computers = await res.json();

	const paths = computers.map((e) => {
		return { params: { id: e.id.toString() } };
	});

	return { paths, fallback: 'blocking' };
}

export default SingleComputer;
