//Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}
//Manager Card
nes (121 sloc)  4.77 KB

// create Manager card
const generateManager = function (manager) {
    return `
    <div class="col-4 mt-4">
        <div class="card ">
            <div class="card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class="material-icons">content_paste</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}
//Intern Card
const generateIntern = function (intern) {
    return `
    <div class="col-4 mt-4">
        <div class="card">
            <div class="card-header">
                <h3>${intern.name}</h3>
                <h4>Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `;
}

//push array
htmlMarkdown = (data) 

    //card array
    arrayPage = [];

    for (let i =0; i < data.length, i++) {
        const employee = data[i];
        const role = employee.getRole();
    }

    //call engineer function
    if (role === 'engineer') {
        const engineerCard = generateEngineer(employee);

        arrayPage.push(engineerCard);
    }

    //call engineer function
    if (role === 'engineer') {
        const engineerCard = generateEngineer(employee);

        arrayPage.push(engineerCard);
    }

    //call engineer function
    if (role === 'engineer') {
        const engineerCard = generateEngineer(employee);

        arrayPage.push(engineerCard);
    }
    