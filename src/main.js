import $ from 'jquery';
import { Date } from './weekday-calc.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  $("#calcForm").submit(function(event) {
    event.preventDefault();
    let day = parseInt($("#day").val());
    let month = parseInt($("#month").val());
    let year = parseInt($("#year").val());
    const newDate = new Date(day, month, year);
    const dayOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    newDate.minusYear();

    console.log(newDate.calculate());

    $("#result").html(dayOfWeek[newDate.calculate()]);

    console.log(newDate.calculate());
  });
}); 