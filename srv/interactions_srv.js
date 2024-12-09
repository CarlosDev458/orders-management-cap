const cds = require('@sap/cds');

module.exports = function () {

    this.before('CREATE', 'Customers', async (req) => {
        const oPayload = req.data
        const sUrl = `https://viacep.com.br/ws/${oPayload.Cep}/json/`
        const oResponse = await fetch(sUrl)
        if(oResponse.status === 400) {
            req.error(oResponse.status, `O Cep de número ${oPayload.Cep} não existe!`);
        }
    });


}
