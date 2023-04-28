const getUsers = () => {
  fetch("https://zaida-website.herokuapp.com/api/admin/getusers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(response);
        throw new Error("Login failed.");
      }
    })
    .then((data) => {
      document.getElementById("number_of_users").innerHTML = data.length;
      let tab = "";
      data.forEach((user, index) => {
        tab += `
            <tr>
                <td class="__namep">${index + 1} </td>
                <td class="__namep">${
                  user.first_name + " " + user.last_name
                } </td>
                <td>
                  <p style="margin:0;">${user.email}</p>
                  <p>${user.phone_number}</p>
                 </td>
                <td class="__namepf">${user.gender} </td>
                <td class="__namep">${user.business_name} </td>
                <td class="__namec">${user.category_of_business} </td>
                <td class="__namep">${user.country} </td>
                <td class="__namep">${user.state} </td>
                <td class="__namep">${user.experience} </td>
                <td class="__namep">${user.industry} </td>
                <td class="__namepf">${user.intervention_needs} </td>
            </tr>`;
      });
      document.getElementById("users").innerHTML = tab;
    })
    .catch((error) => {
      console.log(error);
    });
};

window.onload = function () {
  getUsers();
};

const searchInput = document.getElementById("search-input");

const table = document.getElementById("users");

searchInput.addEventListener("keyup", function () {
  const searchText = searchInput.value.toLowerCase();

  for (let i = 1; i < table.rows.length; i++) {
    const row = table.rows[i];
    let foundMatch = false;
    for (let j = 0; j < row.cells.length; j++) {
      const cellText = row.cells[j].textContent.toLowerCase();

      if (cellText.includes(searchText)) {
        foundMatch = true;
        break;
      }
    }
    if (foundMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  }
});

const exportCSV = () => {
  fetch("https://zaida-website.herokuapp.com/api/admin/exportcsv", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => response.blob())
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "data.csv";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
};
