import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories, Error } from './styles';

import logo from '../../assets/logo.svg';

import api from '../../services/api';

interface Repository {
  full_name: string;
  owner: {
    login: string;
    avatar_url: string;
  }
  description: string;
}

const Dashboard: React.FC = () => {
  const [inputValue, setInputValue ] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
  const storagedRepositories = localStorage.getItem('@repositories');
    if(storagedRepositories) {
      return JSON.parse(storagedRepositories);
    } else {
      return []
    }
  });

  const [error, setError] = useState('');


  async function handleRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if(inputValue.length < 1) {
      setError('Primeiro você precisa informar o autor/repo');
      return;
    }

    try {
      const response = await api.get(`/repos/${inputValue}`)
  
      const { full_name, owner, description } = response.data;
  
      const newRepository = {
        full_name,
        owner,
        description,
      };

      setRepositories([...repositories, newRepository])
      
    } catch {
      setError('Não encontramos nenhum repositorio');
    }
  }


  useEffect(() => {
    localStorage.setItem('@repositories', 
    JSON.stringify(repositories));

  }, [repositories])
  
  return ( 
    <>
      <figure>
        <img src={logo} alt="" />
      </figure>

      <Title>Explore repositories on Github</Title>

      <Form onSubmit={handleRepository}>
        <input
          value={inputValue}
          type="text"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Informe o user/repository" 
        />
        <button type="submit">buscar</button>
      </Form>
      
      {!!error && <Error>{error}</Error>}

      <Repositories>
        {
          repositories.map(repository => (
          <Link to={`/repositories/${repository.full_name}`}>
            <figure>
              <img src={repository.owner.avatar_url} alt="" />
            </figure>
            <figcaption>
              <strong>{repository.full_name}</strong>
              <p>
                {repository.description}
              </p>
            </figcaption>
            <FiChevronRight size={20} />
          </Link>
          ))
        }
      </Repositories>
    </>
  )
}

export default Dashboard;