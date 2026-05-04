import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as XLSX from 'xlsx';

interface Expense {
  id:number;
  category:string;
  amount:number;
  date:string;
  note:string;
}

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule, FormsModule],
  templateUrl:'./app.html',
  styleUrl:'./app.css'
})
export class App {

  category = '';
  amount = 0;
  date = '';
  note = '';

  selectedCategory = 'All';
  selectedMonth = '';

  categories = [
    'Labor',
    'Fertilizer',
    'Chemical',
    'Fuel',
    'Vehicle',
    'Irrigation',
    'Packaging',
    'Electricity',
    'Other'
  ];

  expenses:Expense[] = [];

  constructor(){
    if(typeof window !== 'undefined'){
      const data = localStorage.getItem('expenses');
      if(data){
        this.expenses = JSON.parse(data);
      }
    }
  }

  addExpense(){

    if(!this.category || !this.amount || !this.date){
      alert("Fill all fields");
      return;
    }

    this.expenses.push({
      id:Date.now(),
      category:this.category,
      amount:this.amount,
      date:this.date,
      note:this.note
    });

    this.save();
    this.reset();
  }

  deleteExpense(id:number){
    this.expenses = this.expenses.filter(x => x.id !== id);
    this.save();
  }

  getFiltered(){

    let data = this.expenses;

    if(this.selectedCategory !== 'All'){
      data = data.filter(x =>
        x.category === this.selectedCategory
      );
    }

    if(this.selectedMonth){
      data = data.filter(x =>
        x.date.startsWith(this.selectedMonth)
      );
    }

    return data;
  }

  getTotal(){
    return this.getFiltered()
      .reduce((sum,e)=>sum + e.amount,0);
  }

  save(){
    if(typeof window !== 'undefined'){
      localStorage.setItem(
        'expenses',
        JSON.stringify(this.expenses)
      );
    }
  }

  reset(){
    this.category='';
    this.amount=0;
    this.date='';
    this.note='';
  }

  exportExcel(){

    const data = this.getFiltered();

    const worksheet =
      XLSX.utils.json_to_sheet(data);

    const workbook =
      XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(
      workbook,
      worksheet,
      'Expenses'
    );

    XLSX.writeFile(
      workbook,
      'Expenses_Report.xlsx'
    );
  }

}