const precioOriginal = 120;
const descuento = 18;

// DESCOMENTAR PARA USAR SWITCH O IF

// const coupons = [
//     "JuanDC_es_Batman",
//     "pero_no_le_digas_a_nadie",
//     "es_un_secreto",
// ];

const coupons = [
    {   name: "JuanDC_es_Batman",
        discount: 15,
    },
    {   name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {   name: "es_un_secreto",
        discount: 25,
    }
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100- descuento;
    const precioConDecuento =(precio * porcentajePrecioConDescuento)/100;
    return precioConDecuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("InputPrice");
    const princeValue = inputPrice.value;

    const inputDiscount = document.getElementById("InputDiscount") ; 
    const discountValue = inputDiscount.value;

    const precioConDecuento = calcularPrecioConDescuento(princeValue,discountValue);
    const resultP = document.getElementById("ResultPrice");
    
    resultP.innerText = "El precion con descuento son: $" + precioConDecuento;
}

function onClickButtonPriceCoupon() {
    const inputPrice = document.getElementById("InputPrice");
    const princeValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon") ; 
    const couponValue = inputCoupon.value;

    //let descuento;

    const isCouponValueValid = function (coupon) {
        return coupon.name === couponValue;  // devuelve true or false
    }

    const userCoupon = coupons.find(isCouponValueValid);

    if (!userCoupon) {
        alert("El cupón '" + couponValue + "' no es válido");
    } else {
        const descuento = userCoupon.discount;
        console.log(coupons.find(isCouponValueValid));
        const precioConCoupon = calcularPrecioConDescuento(princeValue,descuento);
    const resultP = document.getElementById("ResultPrice");
    resultP.innerText = "El precion con descuento son: $" + precioConCoupon;
    }


    //Con switch

    // switch(couponValue) {
    //     case coupons[0]:
    //         descuento = 15;
    //     break;
        
    //     case coupons[1]:
    //         descuento = 30;
    //     break;

    //     case coupons[2]:
    //         descuento = 25;
    //     break;
    // }


    //Con if

    // if(!coupons.includes(couponValue)){
    //     alert("El cupón '" + couponValue + "' no es válido");
    // }  else if (couponValue  === "JuanDC_es_Batman"){
    //     descuento=15;
    // } else if (couponValue  === "pero_no_le_digas_a_nadie"){
    //     descuento=30;
    // } else if (couponValue  === "es_un_secreto"){
    //     descuento=25;
    // }

   
    //DESCOMENTAR PARA SWITCH O IF

    // const precioConCoupon = calcularPrecioConDescuento(princeValue,descuento);
    // const resultP = document.getElementById("ResultPrice");
    // resultP.innerText = "El precion con descuento son: $" + precioConCoupon;
}


// console.log ("El precio original es: " + precioOriginal);
// console.log ({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDecuento
//     });
