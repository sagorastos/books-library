import React, { useEffect, useState } from 'react'
import { fetchStats } from "../api";
import { Jumbotron, Button, Table, Row, Col, Badge, Container, ExampleCarouselImage, Carousel} from 'react-bootstrap';

function Dashboard() {
    // const [stats, setStats] = useState([]);

    // useEffect(() => {
    //     const fetshData = async () => {
    //       const responseStats = await fetchStats();
    //       setStats(responseStats);
    //     };
    
    //     fetshData();
    //   }, []);

  return (
    // <div>
    //     <Table bordered>
    //         <thead>
    //         <tr>
    //             {stats.length > 0 &&
    //             stats.map(({ id, title, amount }) => (
    //                 <td key={id}>
    //                 {title}
    //                 <Badge color="secondary">{amount}</Badge>
    //                 </td>
    //             ))}
    //         </tr>
    //         </thead>
    //     </Table>
    // </div>
    
      <Carousel controls={false}>
      <Carousel.Item>
        <img src='/carousel.jpg' width="100%" height="850rem"></img>
        <Carousel.Caption>
          <h3>Books Library</h3>
          <p>Hello, this is my Books Library and i'm so happy to create it!!!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  
  )
}

export default Dashboard