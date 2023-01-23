window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});

// Template literals ES6 feature
const createInnerHtml = () => {
    const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>"+
                       "<th>Salary</th><th>Start Date</th><th>Actions</th>";
    const innerHtml = `${headerHtml}
    <tr>
        <td><img class="profile" alt="" src="../assets/profile-images/Ellipse 1.jpg"></td>
        <td>Prashik Kamble</td>
        <td>Male</td>
        <td>
            <div class="dept-label">HR</div>
            <div class="dept-label">Finance</div>
        </td>
        <td>3000000</td>
        <td>1 Nov 2020</td>
        <td>
            <img id="1" class="edit-delete" onclick="remove(this)" alt="delete"
                src="../assets/icons/delete-black-18dp.png">
            <img id="1" class="edit-delete" alt="edit" onclick="update(this)"
                src="../assets/icons/create-black-18dp.png">
        </td>
    </tr>
    `;
    document.querySelector('#table-display').innerHTML = innerHtml;
}