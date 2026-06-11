import React from 'react';

function Header() {
  const today = new Date().toLocaleDateString('en-PK', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      padding: '20px 40px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 'bold' }}>
          📅 Time Table App
        </h1>
        <p style={{ margin: '5px 0 0 0', fontSize: '14px', opacity: 0.85 }}>
          Manage your daily schedule
        </p>
      </div>
      <div style={{
        background: 'rgba(255,255,255,0.2)',
        padding: '10px 20px',
        borderRadius: '10px',
        fontSize: '14px',
        textAlign: 'right'
      }}>
        📆 {today}
      </div>
    </header>
  );
}

export default Header;