const week_days = ["niedz", "pon", "wt", "srd", "czw", "pt", "sob"];
const months = [
    { name: "Styczen", length: 31, work_month: true, },
    { name: "Luty", length: 28, work_month: true, },
    { name: "Marzec", length: 31, work_month: true, },
    { name: "Kwiecien", length: 30, work_month: true, },
    { name: "Maj", length: 31, work_month: true, },
    { name: "Czerwiec", length: 30, work_month: true, },
    { name: "Lipiec", length: 31, work_month: false, },
    { name: "Sierpien", length: 31, work_month: false, },
    { name: "Wrzesien", length: 30, work_month: true, },
    { name: "Pazdziernik", length: 31, work_month: true, },
    { name: "Listopad", length: 30, work_month: true, },
    { name: "Grudzien", length: 31, work_month: true, },
]

const tables = document.getElementById("tables");



rok(2024);

function rok(num_rok){
    let index = 0;
    for(let i = 0; i < 12; i++){

        const number =(i+8)%12;
        tables.innerHTML += `<h1>${months[number].name}</h1><table><tbody id="${months[number].name}"></tbody></table><br>`;

        const table = document.getElementById(months[number].name);
        
        for (let j = 1; j <= months[number].length; j++) {
            const day = j < 10 ? `0${j}` : j;
            const month = number < 10 ? `0${number+1}` : number+1;
            const year = number < 8 ? num_rok+1 : num_rok;
            const data = new Date(`${year}-${month}-${day}`);


            if (data.getDay() === 0 || data.getDate()===1) { 
                index++;
                table.innerHTML += `<tr id="row-${index}"></tr>`;
            }

            if(data.getDay()==6 || data.getDay()==0 ) continue;

            if(data.getDate()==1 && data.getDay()>1 && data.getDay()<6){
                for(let k = 0; k < data.getDay()-1; k++){
                    const row = document.getElementById(`row-${index}`);
                    row.innerHTML += `<td></td>`;
                }
            }


            const row = document.getElementById(`row-${index}`);
            row.innerHTML += `<td>${week_days[data.getDay()]} - ${j}<br><button></button></td>`;
        }
    }
}

function get_calendar_from_month(month_input, num_rok) {
    let index = 0
    const number =(month_input+8)%12;
    tables.innerHTML += `<h1>${months[number].name}</h1><table><tbody id="${months[number].name}"></tbody></table><br>`;

    const table = document.getElementById(months[number].name);
    
    for (let j = 1; j <= months[number].length; j++) {
        const day = j < 10 ? `0${j}` : j;
        const month = number < 10 ? `0${number+1}` : number+1;
        const year = number < 8 ? num_rok+1 : num_rok;
        const data = new Date(`${year}-${month}-${day}`);


        if (data.getDay() === 0 || data.getDate()===1) { 
            index++;
            table.innerHTML += `<tr id="row-${index}"></tr>`;
        }

        if(data.getDay()==6 || data.getDay()==0 ) continue;

        if(data.getDate()==1 && data.getDay()>1 && data.getDay()<6){
            for(let k = 0; k < data.getDay()-1; k++){
                const row = document.getElementById(`row-${index}`);
                row.innerHTML += `<td></td>`;
            }
        }


        const row = document.getElementById(`row-${index}`);
        row.innerHTML += `<td>${week_days[data.getDay()]} - ${j}<br><button></button></td>`;
    }
}