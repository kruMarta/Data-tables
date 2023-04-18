function DataTable(config, data) {
    let div = document.getElementById("usersTable");
    let table = document.createElement('table');
    let thead = table.createTHead();

    let row = thead.insertRow();
    let amountOfCols = 0;
    let th = document.createElement("th");
    th.textContent="№";
    row.appendChild(th);
    amountOfCols++;

    for (let key of config.columns) {
        let th = document.createElement("th");
        let text = `${key.title}`;
        th.textContent=text;
        row.appendChild(th);
        amountOfCols++;
    }
    thead.appendChild(row);
    thead.style.textAlign ="start";
    thead.style.fontSize ="20px";
    thead.style.border = "3px solid purple";
    thead.style.color = "purple";

    table.appendChild(thead);

    let tbody = document.createElement("tbody");
    let counter = 0;
    for (let info of users){
      let row = tbody.insertRow();

      const information = [`${info.name}`, `${info.surname}`, `${info.age}`];
      if (counter%2 ===0){
        row.style.backgroundColor = "#ff8de2";
      } else {
        row.style.backgroundColor = "#ffddff";
      }
      
      row.style.padding = "20px";

      for (let i = 0; i < amountOfCols; i++){
        let cell = row.insertCell(i);
        cell.style.padding = "10px";
        

        if (i === 0){
          cell.innerHTML = ++counter;
          continue;
        }
        cell.innerHTML = information[i-1];
      }
      tbody.appendChild(row);
    }

    table.style.width ="100%";
    table.style.fontSize ="18px";
    table.style.textAlign ="center";
    table.style.border = "3px solid purple";
    table.style.borderCollapse = "collapse";

    table.appendChild(tbody);
    div.appendChild(table);
 }
 
 const config1 = {
   parent: '#usersTable',
   columns: [
     {title: 'Ім’я', value: 'name'},
     {title: 'Прізвище', value: 'surname'},
     {title: 'Вік', value: 'age'},
   ]
 };
 
 const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
   {id: 30051, name: 'Вася', surname: 'Васечкін', age: 15},
 ];
 
 DataTable(config1, users);