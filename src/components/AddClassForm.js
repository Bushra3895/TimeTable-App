import React, { useState } from 'react';

function AddClassForm({ onAdd }) {
  const [subject, setSubject] = useState('');
  const [teacher, setTeacher] = useState('');
  const [day, setDay] = useState('Monday');
  const [time, setTime] = useState('8:00 AM');

  const colors = ['#e74c3c','#3498db','#2ecc71','#f39c12','#9b59b6','#1abc9c','#e67e22','#34495e'];
  const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const timeSlots = ['8:00 AM','9:00 AM','10:00 AM','11:00 AM','12:00 PM',
                     '1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM'];

  const handleSubmit = () => {
    if (!subject.trim()) return alert('Subject ka naam likho!');
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    onAdd({
      id: Date.now(),
      subject,
      teacher,
      day,
      time,
      color: randomColor
    });
    setSubject('');
    setTeacher('');
  };

  return (
    <div style={{
      background: 'white',
      padding: '25px',
      margin: '20px',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      display: 'flex',
      flexWrap: 'wrap',
      gap: '15px',
      alignItems: 'flex-end'
    }}>
      <h3 style={{ width: '100%', margin: '0 0 10px 0', color: '#333' }}>
        ➕ Add New Class
      </h3>

      <div style={fieldStyle}>
        <label style={labelStyle}>Subject</label>
        <input
          value={subject}
          onChange={e => setSubject(e.target.value)}
          placeholder="e.g. Mathematics"
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Teacher</label>
        <input
          value={teacher}
          onChange={e => setTeacher(e.target.value)}
          placeholder="e.g. Mr. Ahmed"
          style={inputStyle}
        />
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Day</label>
        <select value={day} onChange={e => setDay(e.target.value)} style={inputStyle}>
          {days.map(d => <option key={d}>{d}</option>)}
        </select>
      </div>

      <div style={fieldStyle}>
        <label style={labelStyle}>Time</label>
        <select value={time} onChange={e => setTime(e.target.value)} style={inputStyle}>
          {timeSlots.map(t => <option key={t}>{t}</option>)}
        </select>
      </div>

      <button onClick={handleSubmit} style={{
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        color: 'white',
        border: 'none',
        padding: '12px 30px',
        borderRadius: '10px',
        fontSize: '15px',
        cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        Add Class
      </button>
    </div>
  );
}

const fieldStyle = { display: 'flex', flexDirection: 'column', gap: '5px' };
const labelStyle = { fontSize: '13px', fontWeight: 'bold', color: '#555' };
const inputStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ddd',
  fontSize: '14px',
  minWidth: '160px'
};

export default AddClassForm;