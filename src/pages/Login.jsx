import React, { useState } from 'react';
import '../styles/pages/login/login-page.css';
import { useNavigate } from 'react-router-dom';
import logoFull from '../assets/logo-full.png';

export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            // Logique de connexion (validation ou appel API)
            console.log('Connexion réussie');
            // Rediriger vers la page principale après la connexion
            navigate('/planning');
        } else {
            console.log('Veuillez entrer un nom d\'utilisateur et un mot de passe');
        }
    };

    return (
        <div className="login-container">
            <div className="login-logo">
                <img src={logoFull} alt="Logo OPALE" />
            </div>
            <h2>Se connecter</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Mot de passe</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-btn">Se connecter</button>
            </form>
        </div>
    );
}
