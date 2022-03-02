import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import $ from 'jquery';


import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



ReactDOM.render(<App />, document.getElementById('root'));

$("button").click(function () {
    $.get("demo_test.asp", function (data, status) {
        alert("Data: " + data + "\nStatus: " + status);
    });
});


$('.carousel ').slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,

});


