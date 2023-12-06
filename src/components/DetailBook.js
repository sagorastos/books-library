import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBook } from '../api';

function DetailBook() {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetshData = async () => {
          const responseBook = await fetchBook(id);
          setItem(responseBook);
        };
        
        fetshData();
      }, [id]);

      return (
        <div>
          <h2>Detail Page</h2>
          {item && (
            <div>
              <p>ID: {item.id}</p>
              <p>Name: {item.title}</p>
              {/* Include other details as needed */}
            </div>
          )}
        </div>
      );
    }


export default DetailBook