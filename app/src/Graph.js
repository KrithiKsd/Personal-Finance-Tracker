import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import AppNav from './AppNav';
import { Container } from 'reactstrap';
import "chart.js/auto";


export default class Graph extends Component {
  constructor() {
    super();
    this.state = {
        expenses:[],
    };
  }

  async componentDidMount(){
    const responseExp= await fetch('api/expenses');
    const bodyExp= await responseExp.json();
    this.setState({expenses : bodyExp, isLoading :false});
    console.log(bodyExp);
}

  calculateExpensesByMonth = () => {
    const { expenses } = this.state;
    const expenseByMonth = Array(12).fill(0); // Initialize an array to store expenses for each month

    expenses.forEach((expense) => {
      const expenseDate = new Date(expense.expenseDate);
      const monthIndex = expenseDate.getMonth(); // Get the month index (0 to 11)
      expenseByMonth[monthIndex] += expense.expenseAmount;
    });

    return expenseByMonth;
  };

  render() {
    const {expenses, isLoading} = this.state;
    if(isLoading)
        return (<div>Loading..</div>);

    const expenseByMonth = this.calculateExpensesByMonth();

    const data = {
      labels: [
        'January', 'February', 'March',
        'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
      ],
      datasets: [
        {
          label: 'Personal Budget Tracker',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: expenseByMonth, // Use the calculated expense data here
        }
      ]
    };

    return (
      <div>
        <div><AppNav/></div>
        <Container> 
          <Line
            data={data}
            options={{
              maintainAspectRatio: false,
              title: {
                display: true,
                text: 'Monthly Expense Tracker',
                fontSize: 20 // Reduce the font size for the title
              },
              legend: {
                display: false
              }
            }}
          />
        </Container>
      </div>
    );
  }
}
