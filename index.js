// Division of PaO2 and FiO2 inputs, and validation
function division(event) {
    event.preventDefault();

    let numberFormat = /^[0-9]+$/;;
    let PaO2input = document.getElementById("PaO2").value;
    console.log(PaO2input);
    let FiO2input = document.getElementById("FiO2").value;
    console.log(FiO2input);
    if (PaO2input.match(numberFormat) && FiO2input>0 && FiO2input<=1) {
        let result = PaO2input/FiO2input;
        console.log(result);
        document.querySelector("span").innerText = `Patient's PaO2/FiO2 ratio is: ${result}`;
    } else if (!PaO2input.match(numberFormat) && FiO2input>0 && FiO2input<=1) {
        alert("PaO2 must be a number");
    } else if (PaO2input.match(numberFormat) && (FiO2input>1 || !FiO2input)) {
        alert("Please input FiO2 as decimal e.g. 50% = 0.5");
    } else {
        alert(`PaO2 must be a number \nPlease input FiO2 as decimal e.g. 50% = 0.5`);
    }
}

// Radio buttons to FiO2input
function deviceSelection() {
    if (np1.checked==true || 
        np2.checked==true || 
        np3.checked==true || 
        np4.checked==true || 
        np5.checked==true || 
        np6.checked==true || 
        nrm.checked==true){
        const rbs = document.querySelectorAll('input[name="device"]');
        let selectedValue;
            for (const rb of rbs) {
                if (rb.checked) {
                    selectedValue = rb.value;
                    break;
                }
            }
            console.log(selectedValue);
        document.getElementById("FiO2").value = selectedValue;
    }   
}


// Mouseover & Mouseout Icon
function iconMouseOver() {
    document.getElementById('information').style.display = 'block';
}

function iconMouseOut() {
    document.getElementById('information').style.display = 'none';
}