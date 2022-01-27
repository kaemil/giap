export default function SingleComputer({ computers }) {
	return (
		<div>
			<div>{computers.name}</div>
			<div>{computers.description}</div>
			<div>{computers.price}</div>
		</div>
	);
}

export async function getStaticProps(context) {
	const { params } = context;
	const res = await fetch(`http://localhost:3333/computers/${params.id}`);
	const computers = await res.json();

	return {
		props: {
			computers,
		},
	};
}

export async function getStaticPaths() {
	const res = await fetch('http://localhost:3333/computers');
	const computers = await res.json();

	const paths = computers.map((e) => {
		return { params: { id: e.id.toString() } };
	});

	return {
		paths,
		fallback: false,
	};
}
