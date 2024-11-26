// UWAGI
// OCENY
// SPRAWDZIANY


let students = [
    {
        name: "Example Student 1",
        grades: [1, 2, 3, 4]
    },
    {
        name: "Example Student 2",
        grades: [5, 6]
    },
    {
        name: "Example Student 3",
        grades: [2, 3, 4],
    }
]

let inputs = [];

let students_table = document.getElementById("students");
let grades_tag = document.getElementById("grades_tag");

generate_html();


function generate_html() {

    let max_length = get_max_length();

    let i = 0;
    for (let student of students) {
        let grades = ``;
        let j = 0;

        student.grades.forEach(grade => {
            grades += `
                <td class="grade">
                    <input type="text" class="grade_input" name="grade" id="grade_${i}_${j}" value="${grade}" oninput="validate_grade(this)">
                </td>
            `;
    
            inputs.push(`grade_${i}_${j}`);
    
            j++;
        });
        

        let k = j;
    
        for (let h = j; h < max_length; h++) {
            grades += `
                <td class="grade">
                    <input type="text" class="grade_input" id="grade_${i}_${h}" name="new_grade" oninput="validate_grade(this)">
                </td>
            `

            inputs.push(`grade_${i}_${h}`);

            k = h+1;
        }

        
    
        students_table.innerHTML += `
            <tr>
                <td>
                    ${student.name}
                </td>
                ${grades}
                <td class="grade">
                    <input type="text" class="grade_input" id="grade_${i}_${k}" name="new_grade" oninput="validate_grade(this)">
                </td>
            </tr>
        `;

        inputs.push(`grade_${i}_${k}`);
    
        // if (grades_tag.colSpan < j+1) {
        //     grades_tag.colSpan = j+1;
        // }
    
        i++;
    }
}

function get_max_length() {
    max_length = 0;

    for (let index in students) {
        grades_length = students[index].grades.length;

        if (grades_length <= max_length) {
            continue;
        }
            
        max_length = grades_length;
    }

    return max_length;
}

function update_grades() {
    get_grades();

    students_table.innerHTML = "";

    generate_html();
}

function get_grades() {
    inputs.forEach(input => {
        indexes = input.split('_');
        value = document.getElementById(input).value;

        if (value != "") {
            students[indexes[1]].grades[indexes[2]] = value;
        }
        
    });
}

function validate_grade(input) {
    let value = input.value;
    let id = input.id

    if (value == "n") {
        value = "nb";
    }

    if (!["1", "2", "3", "4", "5", "6", "nb"].includes(value)) {
        value = value.slice(0, -1);
        console.log("invalid grade");
    }

    input.value = value;

    update_grades();
}
