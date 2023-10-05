import React, { Component } from 'react';
import AppNav from './AppNav';

class Category extends Component {
    //internal storage of any components
    state = {
        isLoading: true,
        Categories:[]
      } 

    async componentDidMount(){
        const response= await fetch("/api/category");
        const body= await response.json();
        this.setState({Categories: body, isLoading:false});
    }
    //incharge of processing jsx files and return them as an export function
    render() { 
        const {Categories, isLoading} = this.state;
        if(isLoading)
            return (<div>Loading..</div>);

        return (
            <div>
                <AppNav/>
                <h2>Categories</h2>
                {
                    Categories.map(Category=> 
                        <div id={Category.id}>
                            {Category.name}
                        </div>
                        )
                }

            </div>

         );
    }
}
 
export default Category;
