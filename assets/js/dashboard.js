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
        console.log(response);
        return response.json();
      } else {
        console.log(response);
        throw new Error("Login failed.");
      }
    })
    .then((data) => {
      console.log(data);
      let tab = "";
      data.forEach((user) => {
        tab += `
            <tr>
                <td class="__namep">${user.first_name} </td>
                <td class="__namep">${user.last_name} </td>
                <td class="__namepf">${user.gender} </td>
                <td class="__namep">${user.business_name} </td>
                <td class="__namebugm badge">${user.category_of_business} </td>
                <td class="__namep">${user.country} </td>
                <td class="__namep">${user.state} </td>
                <td class="__namep">${user.experience} </td>
                <td class="__namep">${user.industry} </td>
                <td class="__namepst">${user.intervention_needs} </td>
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
