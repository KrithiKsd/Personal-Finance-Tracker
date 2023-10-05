import React, { Component } from 'react';
import AppNav from './AppNav';
import DatePicker from 'react-datepicker';
import './App.css'
import "react-datepicker/dist/react-datepicker.css";
import { Button, Container, Form, FormGroup, Input, Label, Table} from 'reactstrap';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

class Expenses extends Component {

    emptyItem= {
        description: '',
        expenseDate: new Date(),
        id: 1006,
        location: '',
        category:{id:101, name:'Travel'},
        expenseAmount: 0.00

    }

    constructor(props){
        super(props);

        this.state={
            date: new Date(),
            isLoading: false,
            categories: [],
            expenses:[],
            item: this.emptyItem
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleDateChange=this.handleDateChange.bind(this);
    }

    async handleSubmit(event){
     
        const item =this.state.item;

        await fetch(`/api/expenses`,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });

        event.preventDefault();
        console.log(this.state);
        this.props.history.push("/expenses");
    }

    handleChange(event){
        const target= event.target;
        const value=target.value;
        const name=target.name;
        let item={...this.state.item};
        item[name] =value;
        this.setState({item});
        console.log(item);
    }

    handleDateChange(date){
        let item={...this.state.item};
        item.expenseDate=date;
        this.setState({item});
        console.log(this.state);
    }


    async remove(id){
        await fetch(`api/expenses/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(()=>{
            let updateExpense = [...this.state.expenses].filter(i=> i.id !== id);
            this.setState({expenses : updateExpense});
        });
    }


    
    async componentDidMount(){
        const response= await fetch('api/category');
        const body= await response.json();
        this.setState({categories : body, isLoading :false});


        const responseExp= await fetch('api/expenses');
        const bodyExp= await responseExp.json();
        this.setState({expenses : bodyExp, isLoading :false});
        console.log(bodyExp);
    }
    
/**Calculating total expense */
    getTotal() {
        let total = 0;
        if (this.state.expenses != null) {
            for (var i = 0; i < this.state.expenses.length; i++) {
                total += this.state.expenses[i].expenseAmount
            }
        }
        console.log(total);
        return total;
    }

    render() { 
        const title=<h3>Add your expense</h3>;  
        const {categories}=this.state;
        const{expenses, isLoading} =this.state;


        if(isLoading)
            return (<div>Loading..</div>);

            let optionList =
                    categories.map(category=>
                    <option id={category.id}> 
                        {category.name}
                    </option>
                    )

             let rows=expenses.map(expense=>
                <tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.location} </td>
                    <td><Moment date={expense.expenseDate} format="YYYY/MM/DD"></Moment></td>
                    <td>{expense.category.name}</td>
                    <td><p><b>$</b></p></td>
                    <td>{expense.expenseAmount}</td>
                    <td> <Button size='sm' color='danger' onClick={()=>this.remove(expense.id)}>Delete</Button></td>
                </tr>
             )       
                
        return (
            <div>
                 <AppNav/>
                 <Container>
                    {title}
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for="title">Title</Label>
                            <Input type="description" name="description" id="description" onChange={this.handleChange} autoComplete='name'/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="category">Category</Label>
                            <select onChange={this.handleChange}>
                                {optionList}
                            </select>
                           
                           
                        </FormGroup>

                        <FormGroup>
                            <Label for="expenseDate">Expense Date</Label>
                            <DatePicker selected={this.state.item.expenseDate} onChange={this.handleDateChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="location">Location</Label>
                            <Input type="text" name="location" id="location" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Label for="expenseAmount">Expense Amount</Label>
                            <Input type="text" name="expenseAmount" id="expenseAmount" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup>
                            <Button color='primary' type='submit'>Save</Button>{' '}
                            <Button color='secondary' tag={ Link } to="/" >Cancel</Button>
                        </FormGroup>
                    </Form>
                 </Container>

                {''}
                <Container>
                <h3></h3>
                    <h3>Expense List (Current Total Expense: $ {this.getTotal()})</h3>
                    <Table className='mt-4'>
                        <thead>
                            <tr>
                                <th width="30%">Description</th>
                                <th width="10%">Location</th>
                                <th width="20%">Date</th>
                                <th width="20%" >Category</th>
                                <th></th>
                                <th width="20%">Amount</th>
                                <th width="10%">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {rows}
                        </tbody>
                    </Table>
                </Container>
            
            </div>
        );
    }
}
 
export default Expenses;