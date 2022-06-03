import React from 'react';
import './Auth.scss';
import '../assets/Form.scss';
import { socialsLogin } from './socialsLogin';
import { Input } from './Input';

class Auth extends React.Component {
	state = {
		auth: ''
	}

	render() {
		return (
			<form className="form">
				{/* <Input type="text" label="Имя пользователя" name="login" />
				<Input type="password" label="Пароль" name="password" /> */}
				<div className="auth-buttons">
					{/* <input type="submit" value="Войти" className="form-button" /> */}
					{socialsLogin.map(socialButton => {
						return (
							<a 
								href={`/auth/${socialButton.name.toLocaleLowerCase()}`} 
								style={{backgroundColor: socialButton.color}} 
								className="form-button social"
								onClick={() => this.setState({auth: socialButton.name.toLocaleLowerCase()})}
							>
								<i className={socialButton.icon}></i>
								<span>Войти через {socialButton.name}</span>
							</a>
						)
					})}
				</div>
			</form>
		)
	}
}

export default Auth;