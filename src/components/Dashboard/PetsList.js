import React from 'react';
import { fakePetsData } from './data';
import '../../App.css'

function PetsList() {
  return (
    <div className="dashboard-container">
      <h2>Pets List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Owner</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {fakePetsData.map((pet) => (
            <tr key={pet.id}>
              <td>{pet.name}</td>
              <td>{pet.owner}</td>
              <td>{pet.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PetsList;
