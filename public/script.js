$(".toggle").on("click", function () {
  $(".container").stop().addClass("active");
});

$(".close").on("click", function () {
  $(".container").stop().removeClass("active");
});

$("form[id='1'").on("submit", (e) => {
  console.log("form submitted");
  console.log(e);
  e.preventDefault();
});

$("form[id='2'").on("submit", (e) => {
  console.log("form submitted");
  console.log(e);
  e.preventDefault();
});

$("#register").on("click", async function () {
  const data = await JSON.stringify({
    name: $('input[id="name"]').val(),
    email: $('input[id="email"]').val(),
    phone: $('input[id="phone"]').val(),
    mobilePhone: $('input[id="phone"]').val(),
    cpfCnpj: $('input[id="cpfCnpj"]').val(),
    postalCode: $('input[id="postalCode"]').val(),
    address: $('input[id="address"]').val(),
    addressNumber: $('input[id="addressNumber"]').val(),
    complement: $('input[id="complement"]').val(),
    province: $('input[id="province"]').val(),
    externalReference: "",
    notificationDisabled: false,
    additionalEmails: "",
    municipalInscription: "",
    stateInscription: "",
    observations: "ótimo pagador, nenhum problema até o momento",
  });

  console.log({
    name: $('input[id="name"]').val(),
    email: $('input[id="email"]').val(),
    phone: $('input[id="phone"]').val(),
    mobilePhone: $('input[id="phone"]').val(),
    cpfCnpj: $('input[id="cpfCnpj"]').val(),
    postalCode: $('input[id="postalCode"]').val(),
    address: $('input[id="address"]').val(),
    addressNumber: $('input[id="addressNumber"]').val(),
    complement: $('input[id="complement"]').val(),
    province: $('input[id="province"]').val(),
    externalReference: "",
    notificationDisabled: false,
    additionalEmails: "",
    municipalInscription: "",
    stateInscription: "",
    observations: "ótimo pagador, nenhum problema até o momento",
  });
  console.log(data);

  const config = {
    method: "post",
    url: "http://www.asaas.com/api/v3/customers",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
<<<<<<< HEAD
      access_token:
        "21a839185242fa630fe8486c85ef71d2e1f86447ca58952b1d5d377fa1207d33",
      Accept: "*/*",
=======
      "access_token":
        "65ed80cd7ab8eed04a1bd880baf59f76b88bbdb387490f2ce876e5e90cb980a2",
>>>>>>> 45a55598cf80eaf23b2b00b2cfa9eff800d862d5
    },
    data,
  };

  console.log(config);

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

$("#buscar").on("click", async function () {
  const data = JSON.stringify({
    cpfCnpj: $('input[id="cpfCnpj"]').val(),
  });

  console.log({
    cpfCnpj: $('input[id="cpfCnpj"]').val(),
  });
  console.log(data);

  const config = {
    method: "get",
    url: "https://www.asaas.com/api/v3/customers?cpfCnpj=06161612127",
    headers: {
      access_token:
        "21a839185242fa630fe8486c85ef71d2e1f86447ca58952b1d5d377fa1207d33",
    },
  };

  console.log(config);

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});
