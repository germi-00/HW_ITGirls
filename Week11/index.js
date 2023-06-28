const priceItem1 = document.getElementById("priceItem1").textContent;
const priceItem2 = document.getElementById("priceItem2").textContent;
const priceItem3 = document.getElementById("priceItem3").textContent;
const priceItem4 = document.getElementById("priceItem4").textContent;

const container = document.getElementById("container");
const res = document.createElement("p");
res.textContent = (`Итоговая цена ${+priceItem1 + +priceItem2 + +priceItem3 + +priceItem4} ₽`);
container.append(res);

const button = document.getElementById("btn");

function Sale() {
    priceItem1onSale = priceItem1 * 0.8;
    priceItem2onSale = priceItem2 * 0.8;
    priceItem3onSale = priceItem3 * 0.8;
    priceItem4onSale = priceItem4 * 0.8;
    const priceOnSale = +priceItem1onSale + +priceItem2onSale + +priceItem3onSale + +priceItem4onSale;
    res.textContent = (`Итоговая цена ${priceOnSale.toFixed(0)} ₽`);
    container.append(res);
}
button.addEventListener("click", Sale, { once: true });
