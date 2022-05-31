import React from 'react';
import './Auth.scss';
import '../assets/Form.scss';
import { socialsLogin } from './socialsLogin';
import { Input } from './Input';

class Auth extends React.Component {
	render() {
		return (
			<form action="/api/users" method="post" className="form">
				{/* <Input type="text" label="Имя пользователя" name="login" />
				<Input type="password" label="Пароль" name="password" /> */}
				<div className="auth-buttons">
					{/* <input type="submit" value="Войти" className="form-button" /> */}
					{socialsLogin.map(socialButton => {
						return (
							<button type="submit" style={{backgroundColor: socialButton.color}} className="form-button social">
								<i className={socialButton.icon}></i>
								<span>Войти через {socialButton.name}</span>
							</button>
						)
					})}
				</div>
			</form>
		)
	}
}

export default Auth;