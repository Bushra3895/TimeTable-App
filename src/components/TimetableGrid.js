import React from 'react';

function TimetableGrid({ classes, onDelete }) {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const timeSlots = ['8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
                     '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const getClass = (day, time) => {
    return classes.find(c => c.day === day && c.time === time);
  };

  return (
    <div style={{ padding: '20px', overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '700px' }}>
        <thead>
          <tr>
            <th style={thStyle}>⏰ Time</th>
            {days.map(day => (
              <th key={day} style={thStyle}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {timeSlots.map((time, i) => (
            <tr key={time} style={{ background: i % 2 === 0 ? '#fafafa' : 'white' }}>
              <td style={timeStyle}>{time}</td>
              {days.map(day => {
                const cls = getClass(day, time);
                return (
                  <td key={day} style={tdStyle}>
                    {cls ? (
                      <div style={{
                        background: `linear-gradient(135deg, ${cls.color}, ${cls.color}cc)`,
                        color: 'white',
                        padding: '10px 8px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        textAlign: 'center',
                        boxShadow: `0 3px 10px ${cls.color}55`,
                        position: 'relative'
                      }}>
                        <div style={{ fontWeight: 'bold', fontSize: '14px', marginBottom: '2px' }}>
                          👤 {cls.teacher}
                        </div>
                        <div style={{ fontSize: '12px', opacity: 0.85, marginTop: '2px' }}>
                          📚 {cls.subject}
                        </div>
                        <button
                          onClick={() => onDelete(cls.id)}
                          style={{
                            marginTop: '6px',
                            background: 'rgba(255,255,255,0.25)',
                            border: '1px solid rgba(255,255,255,0.4)',
                            borderRadius: '6px',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '11px',
                            padding: '3px 10px',
                            width: '100%'
                          }}
                        >
                          🗑 Remove
                        </button>
                      </div>
                    ) : (
                      <div style={{
                        height: '70px',
                        borderRadius: '8px',
                        border: '1.5px dashed #e0e0e0'
                      }} />
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const thStyle = {
  background: 'linear-gradient(135deg, #667eea, #764ba2)',
  color: 'white',
  padding: '14px',
  textAlign: 'center',
  fontSize: '13px',
  fontWeight: 'bold',
  letterSpacing: '0.5px'
};

const timeStyle = {
  background: 'linear-gradient(135deg, #f8f9ff, #eef0ff)',
  padding: '10px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '12px',
  color: '#667eea',
  border: '1px solid #e8eaf6',
  minWidth: '80px'
};

const tdStyle = {
  padding: '6px',
  border: '1px solid #eee',
  minWidth: '120px',
  verticalAlign: 'middle'
};

export default TimetableGrid;