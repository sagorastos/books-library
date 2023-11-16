import React, { useEffect, useState } from 'react'
import { fetchStats } from "../api";
import { Jumbotron, Button, Table, Row, Col, Badge } from 'react-bootstrap';

function Dashboard() {
    const [stats, setStats] = useState([]);

    useEffect(() => {
        const fetshData = async () => {
          const responseStats = await fetchStats();
          setStats(responseStats);
        };
    
        fetshData();
      }, []);

  return (
    <div>
        <Table bordered>
            <thead>
            <tr>
                {stats.length > 0 &&
                stats.map(({ id, title, amount }) => (
                    <td key={id}>
                    {title}
                    <Badge color="secondary">{amount}</Badge>
                    </td>
                ))}
            </tr>
            </thead>
        </Table>
    </div>
  )
}

export default Dashboard