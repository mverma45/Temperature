      const kTemp = document.querySelector('#tempk');
     function tempkel(){
        const tempk = Math.floor((0-32) * 5/9 + 273.15)
        // kTemp.innerHTML = `${tempk}`;
        console.log(`Temperature in Kelvin is ${tempk}`);
    }

    //Random Number Generator Example
// const r = document.querySelector('#rand')
// function random() {
//     const rand = Math.floor(Math.random() * 20) + 1
//     r.innerHTML = `${rand}`
// }