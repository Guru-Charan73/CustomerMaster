module.exports =  function(){

    const  { CustomerMaster ,ShiptoAddress,BilltoAddress} = this.entites;

    this.on("addCustomer",async (req, res)=>{

        const { ID, CustomerNumber, Soldto, Shipto, Billto, Payer, PARNR, PARAU, NAMEV, NAME1, TELF1, SORTL } = req.data;
        const data = req.data;
        const response = (message) => {
            return {
                success: true,
                message: `Customer ${CustomerNumber} has been ${message}`,
                customer: {
                    ID,
                    CustomerNumber,
                    Soldto,
                    Shipto: Shipto.map(shipto => ({ ShiptoNr: shipto.ShiptoNr })),
                    Billto: Billto.map(billto => ({ BilltoNr: billto.BilltoNr })),
                    Payer,
                    PARNR,
                    PARAU,
                    NAMEV,
                    NAME1,
                    TELF1,
                    SORTL
                }
    })


}