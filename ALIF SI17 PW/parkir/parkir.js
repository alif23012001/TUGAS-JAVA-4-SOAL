const biaya_1 = document.getElementById('biaya_1');
const lama_1 = document.getElementById('lama_1');

const lama_11 = 10 - 8;

if (lama_11 > 2) {
    const biaya1 = lama_11 - 2;
    const biaya2 = biaya1 * 1000;
    const biaya3 = 3000 + biaya2;

    const biaya4 = new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR' }
    ).format(biaya3); ;

    biaya_1.innerHTML = biaya4;
} else {
    const biaya3 = 3000;

    const biaya4 = new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR' }
    ).format(biaya3); ;

    biaya_1.innerHTML = biaya4;
}

lama_1.innerHTML = lama_11 + " jam";

// -----------------------------------------------------

const biaya_2 = document.getElementById('biaya_2');
const lama_2 = document.getElementById('lama_2');

const lama_22 = 11 - 7;

if (lama_22 > 2) {
    const biaya1 = lama_22 - 2;
    const biaya2 = biaya1 * 1000;
    const biaya3 = 3000 + biaya2;

    const biaya4 = new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR' }
    ).format(biaya3); ;

    biaya_2.innerHTML = biaya4;
} else {
    const biaya3 = 3000;

    const biaya4 = new Intl.NumberFormat('id-ID',
    { style: 'currency', currency: 'IDR' }
    ).format(biaya3); ;

    biaya_2.innerHTML = biaya4;
}

lama_2.innerHTML = lama_22 + " jam";