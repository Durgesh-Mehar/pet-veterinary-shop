import React from 'react';
import { fakeServicesData } from './data';
import '../../App.css'


function ServicesList() {
  return (
    <div className="dashboard-container">
      <h2>Services List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {fakeServicesData.map((service) => (
            <tr key={service.id}>
              <td>{service.name}</td>
              <td>${service.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ServicesList;
