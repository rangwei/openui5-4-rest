sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
  "use strict";

  return Controller.extend("com.myorg.ajax.controller.MainView", {
    onInit: function() {

      var oModel = new JSONModel();
      this.getView().setModel(oModel);

      var url = 'http://localhost:8081/https://reqres.in/api/users/';
      
      $.ajax({
        url: url,
        type: "GET",
        contentType: "application/json",
        dataType: 'json',
        success: function(data, textStatus, jqXHR) {
          oModel.setData(data);
        }
      });
    }
  });
});
