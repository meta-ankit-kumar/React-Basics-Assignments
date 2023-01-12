import './userForm.css';
import { useState } from 'react';

export const UserForm = () => {
	const [name, setName] = useState('');
	const [age, setAge] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [mail, setMail] = useState('');
	const [gender, setGender] = useState('male');
	const [address, setAddress] = useState('');
	const [userImage, setUserImage] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const handleFormSubmit = (event) => {
		console.log('Handle form submit called');
		setIsFormValid(true);
	}
	const clearFields = () => {
		setName('');
		setAge('');
		setContactNumber('');
		setMail('');
		setGender('');
		setAddress('');
		setUserImage('');
		setIsFormValid(false);
	}

	if (!isFormValid)
		return (
			<>
				<div className='user-form'>
					<div className='label-part'>
						<label htmlFor="name">
							Name
						</label>
						<label htmlFor="age">
							Age
						</label>
						<label htmlFor="email">
							Email
						</label>
						<label htmlFor="contact">
							Contact Number
						</label>
						<label htmlFor="gender">
							Gender
						</label>
						<label htmlFor="address">
							Address
						</label>
						<label id='image-label' htmlFor="user-image">
							Upload Image
						</label>
					</div>
					<div className='input-part'>
						<form onSubmit={handleFormSubmit} method="post">
							<input type="text" name="name" id="name" value={name} onInput={(event) => setName(event.target.value)} required />
							<input type="number" name="age" id="age" value={age} onInput={(event) => setAge(event.target.value)} required />
							<input type="email" name="email" id="email" value={mail} onInput={(event) => setMail(event.target.value)} required />
							<input type="tel" name="contact" id="contact" value={contactNumber} onInput={(event) => setContactNumber(event.target.value)} pattern="\d{10}" required />
							<div className="gender-selection">
								<input type="radio" id="male" name="gender" value="male" onInput={(event) => setGender(event.target.value)} required />
								<label htmlFor="male">Male</label>
								<input type="radio" id="female" name="gender" value="female" onInput={(event) => setGender(event.target.value)} required />
								<label htmlFor="female">Female</label>
							</div>
							<div className='address-field'>
								<textarea name="address" id="address" rows="5" value={address} onInput={(event) => setAddress(event.target.value)} required></textarea>
							</div>
							<input id="user-image" type="file" value={userImage && userImage[0].name} onChange={(event) => setUserImage(event.target.files)} required />
							<div className='form-buttons'>
								<input type="submit" value="Submit" />
								<input type="button" value="Clear" onClick={() => clearFields()}/>
							</div>
						</form>
					</div>
				</div>
			</>
		);
	else {
		return (
			<div className='form-data'>
				<h3>
					Thanks for submitting the form. Here are your details:
				</h3>
				<h4>Name: {name.toUpperCase()}</h4>
				<h4>Age: {age}</h4>
				<h4>Email: {mail}</h4>
				<h4>Contact no: {contactNumber}</h4>
				<h4>Gender: {gender.toUpperCase()}</h4>
				<h4>Address: {address.toUpperCase()}</h4>
				<h4>Image:</h4>
				<img className='user-image' width={500} src={URL.createObjectURL(userImage[0])} alt="User Avatar" />
			</div>
		)
	}
}