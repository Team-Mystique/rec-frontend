import React, { useState, useEffect, useMemo } from 'react';
import './Welcome.css';
import { studentAPI } from '../../../services/api';

const Welcome = () => {
  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Default fallback data for when API is not available
  const defaultStats = useMemo(() => [
    {
      title: "Overall GPA",
      value: "3.8",
      description: "Above average",
    },
    {
      title: "Active Courses",
      value: "3",
      description: "This semester",
    },
    {
      title: "Pending Tasks",
      value: "5",
      description: "Due this week",
    },
    {
      title: "Study Streak",
      value: "12",
      description: "Days in a row",
    },
  ], []);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const data = await studentAPI.getDashboardData();
        setDashboardData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
        setError('Unable to load dashboard data');
        // Use default data when API is not available
        setDashboardData({ stats: defaultStats });
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [defaultStats]);

  const stats = dashboardData?.stats || defaultStats;

  if (loading) {
    return (
      <div className="welcome-grid">
        <div style={{ 
          textAlign: 'center', 
          padding: '20px',
          color: '#666'
        }}>
          Loading dashboard data...
        </div>
      </div>
    );
  }

  return (
    <div className="welcome-grid">
      {error && (
        <div style={{
          backgroundColor: '#fee',
          color: '#c33',
          padding: '10px',
          borderRadius: '5px',
          marginBottom: '15px',
          textAlign: 'center'
        }}>
          {error} - Using cached data
        </div>
      )}
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <p className="stat-title">{stat.title}</p>
          <p className="stat-value">{stat.value}</p>
          <p className="stat-description">{stat.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Welcome;