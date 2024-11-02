sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return {
        onInit: function(){

            //Eliminar las columnas
            const oSmartTable = this.getView().byId("listReport");
            if (oSmartTable) {
                try {
                    oSmartTable.setIgnoreFromPersonalisation('CompanyCode,FiscalYear,DocumentDate,AccountingDocumentType,AccountingDocument,TaxCodeIva,TaxCodeExt,TaxCodeNoImp,TaxCodeCombus,TaxCodeIce,TaxCodeIehd,TaxCodeIpj,TaxCodeTasas,TaxCodeDscto,TaxCodeGc,CtaCreditoFiscal,CtaDebitoFiscal,CtaCajaChica,FechaFacturaAux');
                    oSmartTable.setUseTablePersonalisation(true)    
                } catch (error) {
                    console.error("Error Function: OnInit ",error);
                }
            }
        },
    };
});        