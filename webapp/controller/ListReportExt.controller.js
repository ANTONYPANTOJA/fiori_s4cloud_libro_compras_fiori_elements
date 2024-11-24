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

            //model
            let gridTable = this.getView().byId("ns.asa.zappbookpurcharse::sap.suite.ui.generic.template.ListReport.view.ListReport::BookPurcharse--GridTable");
            if (gridTable) {
                gridTable.setThreshold(1000000);
            }
        },
        onBeforeRendering: function(){

            try {
                const postAction = this.byId("postAction");
                if (postAction) {
                    postAction.setIcon("sap-icon://excel-attachment");
                }       
            } catch (error) {
                console.error("Error Function: onBeforeRendering ", error);
            }
            
        },
        postExcel: function(oEvent){
            const oSource     = oEvent.getSource();
            const oGridTable  = oSource.getParent().getParent().getTable(); 
            if (oGridTable) {
                const model = oGridTable.getModel();
                if (model) {
                    if (model.oData) {
                        
                    }
                }
            }
        },
        onBeforeRebindTableExtension: function(oEvent){

        },    
        onBeforeRebindTable: function(oEvent){

        },
        onBeforeExportExtension: function(oEvent){
            if (oEvent) {
                let mExcelSettings = oEvent.getParameter("exportSettings");
                if (mExcelSettings.fileName === "Items")  {
					mExcelSettings.fileName = "Reporte de Libro de compras IVA";
				}
                mExcelSettings.dataSource.sizeLimit = 250000;
                mExcelSettings.dataSource.count = 250000;
            }
        },
        onBeforeExport: function(oEvent){
            if (oEvent) {
                
            }
        },
        onBeforeExcelExport: function(oEvent){
            if (oEvent) {
                
            }
        }
    };
});        