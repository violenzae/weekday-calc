import $ from 'jquery';
import { Date } from './weekday-calc.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#calcForm").submit(function(event) {
    event.preventDefault();
    let day = parseInt($("#day").val());
    console.log(day);
    let month = parseInt($("#month").val());
    console.log(month);
    let year = parseInt($("#year").val());
    console.log(year);
    let newDate = new Date(day, month, year);
    console.log(newDate);

    newDate.minusYear();
    newDate.calculate();
    console.log(newDate.calculate());
    let weekday = newDate.print();
  

    alert(newDate);
    console.log(day);
    console.log(month);
    console.log(year);
    console.log(weekday);
    $("#result").html(weekday);
  });
}); 