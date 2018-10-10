sap.ui.define([
	"pruebaventas/PruebaVentas/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("pruebaventas.PruebaVentas.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);