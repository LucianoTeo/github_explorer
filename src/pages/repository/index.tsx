import React, { useState, useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { Header, RepositoryInfoContainer, RepositoryInfoNumbers, Issues } from './styles';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import logo from '../../assets/logo.svg';

import api from '../../services/api'

interface RepositoryParams  {
  repository: string;
}

interface RepositoryInfo {
  full_name: string;
  description: string;
  owner: {
    avatar_url: string;
    login: string;
  }
  open_issues: number;
  forks: number;
  watchers: number;
}

interface RepositoryIssues {
  id: number;
  title: string;
  url: string;
  user: {
    login: string;
  }
}

const Repository: React.FC = () => {
  const [repository, setRepository ] = useState<RepositoryInfo | null>(null);
  const [issues, setIssues ] = useState<RepositoryIssues[]>([]);

  const  { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {

    async function  loadRepositoryDetails() {
      const response = await Promise.all([
        api.get(`/repos/${params.repository}`), 
        api.get(`/repos/${params.repository}/issues`)
      ]);

      const [ responseRepo, responseIssues] = response;

      const { full_name, description, owner, open_issues, forks, watchers } = responseRepo.data;

      const repositoryInfo = {
        full_name: full_name,
        description: description,
        owner: {
          avatar_url: owner.avatar_url,
          login: owner.login,
        },
        open_issues: open_issues,
        forks: forks,
        watchers: watchers,
      }

      setRepository(repositoryInfo);
      setIssues(responseIssues.data)
    }
   
    loadRepositoryDetails();
  })

  return (
    <>
      <Header>
        <figure>
          <img src={logo} alt="" />
        </figure>

        <Link to="/">
          <FiChevronLeft size={18} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfoContainer>
        <figure>
          <img src={repository?.owner.avatar_url} />
        </figure>
        <figcaption>
          <strong>{repository?.full_name}</strong>
          <p>{repository?.description}</p>
        </figcaption>
      </RepositoryInfoContainer>

      <RepositoryInfoNumbers>
        <li>
          <strong>{repository?.watchers}</strong>
          <span>Stars</span>
        </li>
        <li>
          <strong>{repository?.forks}</strong>
          <span>Forks</span>
        </li>
        <li>
          <strong>{repository?.open_issues}</strong>
          <span>Issues Abertas</span>
        </li>
      </RepositoryInfoNumbers>

      <Issues>
      {
        issues.map(issue => (
          <Link to="">
            <figcaption>
              <strong>{issue.title}</strong>
              <p>
                {issue.user.login}
              </p>
            </figcaption>
            <FiChevronRight size={20} />
          </Link>
          ))
        }
      </Issues>
    </>
  )
}

export default Repository;