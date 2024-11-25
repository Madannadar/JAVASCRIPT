const insert = document.getElementById('insert') // here only getElementById works queryselecter does not works

window.addEventListener('keydown', (e) =>{
    insert.innerHTML = `
        <div class = "color">
        <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key === " "? "space" : e.key}</td>
            <td>${e.keycode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
        </div>
    `
})