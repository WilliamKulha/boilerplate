import { test } from './module.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/input.scss';
import $ from 'jquery';

$(function() {
  console.log('hey');
  console.log(test);
});
