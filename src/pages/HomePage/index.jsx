import './style.css';
import { Link, Outlet } from 'react-router-dom';
import { Text } from '../../components/Text';
import { Header } from '../../components/Header';
import { MainContainer } from '../../components/MainContainer';
import { useState } from 'react';

export const HomePage = () => {
  return (
    <>
      <div className="container">
        <Text />
        <MainContainer />
      </div>
    </>
  );
};
