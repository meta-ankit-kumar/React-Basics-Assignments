import './userForm.css';

export const UserForm = () => {
	return (
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
			</div>
			<div className='input-part'>
				<input type="text" name="name" id="name" required/>
				<input type="number" name="age" id="age" required/>
				<input type="email" name="email" id="email" required/>
				<input type="number" name="contact" id="contact" required/>
				<div className="gender-selection">
					<input type="radio" id="male" name="gender" value="male" required/>
					<label for="male">Male</label>
					<input type="radio" id="female" name="gender" value="female" required/>
					<label for="female">Female</label>
				</div>
				<div className='address-field'>
					<textarea name="address" id="address" cols="30" rows="5" required></textarea>
				</div>
			</div>
		</div>
	)
}