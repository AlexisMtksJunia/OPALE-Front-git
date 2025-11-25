import React, { useState } from 'react';
import { useTheme } from '../hooks/useTheme';  // Hook personnalisé pour gérer le thème
import ThemeToggle from '../components/ThemeToggle';  // Composant du switch de thème
import './login-page.css';  // Fichier CSS pour le style

const LoginPage: React.FC = () => {
  const { theme } = useTheme();  // Récupère le thème actuel
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => setLogin(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for form submission (authentication)
    console.log('Login submitted:', login);
  };

  return (
    <div className={`login-page ${theme}`}>
      <div className="login-container">
        <img src="/assets/logo-full.png" alt="Logo OPALE" className="login-logo" />
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="login">Login</label>
            <input 
              type="text" 
              id="login" 
              value={login} 
              onChange={handleLoginChange} 
              placeholder="Entrez votre identifiant" 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={handlePasswordChange} 
              placeholder="Entrez votre mot de passe" 
              required 
            />
          </div>
          <button type="submit" className="login-button">Se connecter</button>
        </form>
        <ThemeToggle />  {/* Le bouton pour changer le thème */}
      </div>
    </div>
  );
};

export default LoginPage;
