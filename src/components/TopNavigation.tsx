import React from 'react';
import { FaSun } from 'react-icons/fa';

interface TodoNavigationType {
  tab: 'All' | 'Active' | 'Completed';
  clickTab: (type: 'All' | 'Active' | 'Completed') => void;
}

function TopNavigation({ tab, clickTab }: TodoNavigationType) {
  return (
    <div className='TopNavigationWrapper'>
      <FaSun className='sun' />
      <div className='buttonWrapper'>
        <button
          className={tab === 'All' ? 'active' : ''}
          onClick={() => {
            clickTab('All');
          }}
        >
          All
        </button>
        <button
          className={tab === 'Active' ? 'active' : ''}
          onClick={() => {
            clickTab('Active');
          }}
        >
          Active
        </button>
        <button
          className={tab === 'Completed' ? 'active' : ''}
          onClick={() => {
            clickTab('Completed');
          }}
        >
          Completed
        </button>
      </div>
    </div>
  );
}

export default TopNavigation;
