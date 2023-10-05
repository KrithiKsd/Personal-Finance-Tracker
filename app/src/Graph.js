import React, { Component } from 'react';
import Chart from 'chart.js/auto';
import { Line } from "react-chartjs-2";
import AppNav from './AppNav';
import { Button, Container, Form, FormGroup, Input, Label, Table} from 'reactstrap';

const state = {
    labels: ['January', 'February', 'March',
             'April', 'May','June','July','August','September','October','November','December'],
    datasets: [
      {
        label: 'Personal Budget Tracker',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 20, 18, 75, 32, 45, 94, 30]
      }
    ]
  }

  export default class Graph extends Component {
    render() {
      return (
        
        <div>
            <div><AppNav/></div>
            <Container> 
          <Line
            data={state}
            options={{
              maintainAspectRatio: false,
              title:{
                display:true,
                text:'Average Rainfall per month',
                fontSize:50
              },
              legend:{
                display:false
              }
            }}
          />
          </Container>
        </div>
      );
    }
  }