let container = document.querySelector(".container");
let secCon = document.querySelector(".secCon");




const coursesData = [
    { id: 1, name: 'First Aid', price: 1500 },
    { id: 2, name: 'Sewing', price: 1500 },
    { id: 3, name: 'Landscaping', price: 1500 },
    { id: 4, name: 'Life Skills', price: 1500 },
    { id: 5, name: 'Child Minding', price: 750 },
    { id: 6, name: 'Cooking', price: 750 },
    { id: 7, name: 'Garden Maintenance', price: 750 },
];
let selectedList = []; 

function addCourseToList(id, event) {

    const button = event.target;

    if (!selectedList.includes(id)) {
        selectedList.push(id);
        console.log('add:' , selectedList);
        button.classList.toggle("active");
    }else{
        const index = selectedList.indexOf(id);
        if (index > -1) {
            selectedList.splice(index, 1);
            console.log('rmv:' , selectedList);
            button.classList.toggle("active");
        }
    }
}

function calcTotal() {

    const selectedCourses = coursesData.filter(course => selectedList.includes(course.id));

    let total = selectedCourses.reduce((sum, course) => sum + course.price, 0);

    let discount = 0;
    if (selectedCourses.length > 1) {
        switch (selectedCourses.length) {
            case 2:
                discount = 0.05;
                break;
            case 3:
                discount = 0.1;
                break;
            default:
                discount = 0.15;
                break;
        }
    }


    const discountedTotal = total - (total * discount);
    const finalTotal = discountedTotal + (discountedTotal * 0.15);

    document.getElementById("subTotal").innerHTML = "R" + total;
    document.getElementById("discount").innerHTML = discount + "%";
    document.getElementById("vat").innerHTML = 0.15 + "%";
    document.getElementById("finalTotal").innerHTML = "R" + finalTotal;

    return { total, discountAmount: total * discount, finalTotal };
};