import React from 'react';
import Auth from '../Forms/Auth';
import NewAuth from '../Forms/NewAuth';

class AuthPage extends React.Component {
	render() {
		return (
			<div className="auth-forms">
				<div className="auth-section">
					<div className="auth-section_header">
							Войти в систему
					</div>
					<Auth />
				</div>
				<div className="auth-section-separator">
					<div className="auth-section-separator_icon-wrapper">
						<div className="auth-section-separator_icon">
							<i className="fas fa-user"></i>
						</div>
					</div>
				</div>
				<div className="auth-section">
					<div className="auth-section_header">
						Зарегистрироваться
					</div>
					<NewAuth />
				</div>
			</div>
		)
	}
}

export default AuthPage;