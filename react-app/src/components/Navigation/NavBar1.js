
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector, useDispatch } from 'react-redux'

import styles from './NavBar1.module.css'

const NavBar1 = () => {
  const user = useSelector(state => state.session.user)
  return (
    <nav>
       <div className={styles.container}>
         <div className={styles.startContainer}>

<input
  placeholder='Search..'
  type='text'
  className={styles.searchBar}
  // onChange={(e) => setSearchInput((e.target.value).toLowerCase())}
  />
           <Link className={styles.link} to='/categories'>
         <p className={styles.start}>Explore Projects</p>
         </Link>
         
         </div>
         <div className={styles.photoContainer}>
      <Link  className={styles.link} to='/'>
      <img src='https://i.imgur.com/giDqQ9u.png' className={styles.h1}></img>
      </Link>
      </div>
         <div className={styles.endContainer}>
         <Link className={styles.link} to='/create'>
         <p className={styles.start}>Start a Project</p>
         </Link>
         <p className={styles.start}>Welcome, {user.username}! </p>
          <LogoutButton />
          </div>
        </div>
    </nav>
  );
}

export default NavBar1;
