import React, { useState } from 'react';

const initialValue = { name: '', description: '', price: '' };

function Blog() {
	const [inputValue, setInputValue] = useState(initialValue);

	const handleSubmit = (e) => {
		e.preventDefault();
		fetch('http://localhost:3333/computers', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputValue),
		}).then((data) => data.json());
	};

	const handleForm = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="name..."
					value={inputValue.name}
					onChange={handleForm}
				></input>
				<textarea
					name="description"
					placeholder="description..."
					value={inputValue.description}
					onChange={handleForm}
				></textarea>
				<input
					type="number"
					name="price"
					placeholder="price"
					value={inputValue.price}
					onChange={handleForm}
				></input>
				<button type="submit">Dodaj</button>
			</form>
		</div>
	);
}
export default Blog;
