import React, { useState } from 'react';

import styles from '../../styles/ComputerCreate.module.css';

const initialValue = { name: '', description: '', price: '' };

function ComputerCreate() {
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
		setInputValue(initialValue);
	};

	const handleForm = (e) => {
		const { name, value } = e.target;
		setInputValue({
			...inputValue,
			[name]: value,
		});
	};

	return (
		<div className={styles.container}>
			<form onSubmit={handleSubmit} className={styles.form}>
				<input
					type="text"
					name="name"
					placeholder="name..."
					value={inputValue.name}
					onChange={handleForm}
					className={styles.input}
				></input>
				<textarea
					name="description"
					placeholder="description..."
					value={inputValue.description}
					onChange={handleForm}
					className={styles.textarea}
					rows="5"
				></textarea>
				<input
					type="number"
					name="price"
					placeholder="price"
					value={inputValue.price}
					onChange={handleForm}
					className={styles.input}
				></input>
				<button type="submit" className={styles.button}>
					Dodaj
				</button>
			</form>
		</div>
	);
}

export default ComputerCreate;
