$(".toggle").on("click", function () {
  $(".container").stop().addClass("active");
});

$(".close").on("click", function () {
  $(".container").stop().removeClass("active");
});

$("form").on("submit", e => e.preventDefault());

$("#register").on("click", async function () {
  const data = JSON.stringify({
    name: $('input[name="name"]').val(),
    email: $('input[name="email"]').val(),
    phone: $('input[name="phone"]').val(),
    mobilePhone: $('input[name="phone"]').val(),
    cpfCnpj: $('input[name="cpfCnpj"]').val(),
    postalCode: $('input[name="postalCode"]').val(),
    address: $('input[name="address"]').val(),
    addressNumber: $('input[name="addressNumber"]').val(),
    complement: $('input[name="complement"]').val(),
    province: $('input[name="province"]').val(),
    externalReference: '',
    notificationDisabled: false,
    additionalEmails: "",
    municipalInscription: "",
    stateInscription: "",
    observations: "ótimo pagador, nenhum problema até o momento",
  });

  const config = {
    method: "post",
    url: "https://www.asaas.com/api/v3/customers",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      access_token:
        "21a839185242fa630fe8486c85ef71d2e1f86447ca58952b1d5d377fa1207d33",
    },
    data,
  };

  await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
});