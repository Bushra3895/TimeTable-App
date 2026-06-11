import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TimetableGrid from './components/TimetableGrid';
import AddClassForm from './components/AddClassForm';

function App() {
  const [classes, setClasses] = useState(() => {
    const saved = localStorage.getItem('timetable');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('timetable', JSON.stringify(classes));
  }, [classes]);

  const handleAdd = (newClass) => {
    setClasses(prev => [...prev, newClass]);
  };

  const handleDelete = (id) => {
    setClasses(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Header />
      <AddClassForm onAdd={handleAdd} />
      <div style={{
        margin: '0 20px 20px 20px',
        background: 'white',
        borderRadius: '15px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
      }}>
        <TimetableGrid classes={classes} onDelete={handleDelete} />
      </div>
    </div>
  );
}

export default App;