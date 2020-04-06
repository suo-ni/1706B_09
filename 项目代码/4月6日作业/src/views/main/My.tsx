import React from 'react';
import styles from './my.module.scss'
function My() {
  return (
    <div className="My">
      <div className={styles.header}>
        <p>普通用户</p>
      </div>
    </div>
  );
}

export default My;