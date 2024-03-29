/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

const alas = document.getElementById('alas')
const tinggi = document.getElementById('tinggi')
const hitungL = document.getElementById('hitungL')
const hasilL = document.getElementById('hasilL')

hitungL.addEventListener('click', function () {
    let a = alas.value
    let t = tinggi.value
    let l = 0.5 * a * t
    hasilL.innerHTML =
        `L = 1/2 x a x t
<br> L = 1/2 x ${a} cm x ${t} cm
<br> L = ${l} cm2`
})

const s1 = document.getElementById('s1')
const hitungK = document.getElementById('hitungK')
const hasilK = document.getElementById('hasilK')

hitungK.addEventListener('click', function () {
    let sa = s1.value
    let sb = s2.value
    let sc = s3.value
    let k = (parseInt(sa) + parseInt(sb) + parseInt(sc)) //parseInt berfungsi untuk mengubah string menjadi integer.
    hasilK.innerHTML =
        `K = S1 + S2 + S3
<br> K = ${sa} cm + ${sb} cm + ${sc} cm
<br> K = ${k} cm`
})

