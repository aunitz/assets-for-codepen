(function() {
  var callWithJQuery;

  callWithJQuery = function(pivotModule) {
    if (typeof exports === "object" && typeof module === "object") {
      return pivotModule(require("jquery"));
    } else if (typeof define === "function" && define.amd) {
      return define(["jquery"], pivotModule);
    } else {
      return pivotModule(jQuery);
    }
  };

  callWithJQuery(function($) {
    var esFmt, esFmtInt, esFmtPct, nf, tpl;
    nf = $.pivotUtilities.numberFormat;
    tpl = $.pivotUtilities.aggregatorTemplates;
    esFmt = nf({
      thousandsSep: ".",
      decimalSep: ","
    });
    esFmtInt = nf({
      digitsAfterDecimal: 0,
      thousandsSep: ".",
      decimalSep: ","
    });
    esFmtPct = nf({
      digitsAfterDecimal: 1,
      scaler: 100,
      suffix: "%",
      thousandsSep: ".",
      decimalSep: ","
    });
    return $.pivotUtilities.locales.es = {
      localeStrings: {
        renderError: "Une erreur est survenue en dessinant le tableau croisé.",
        computeError: "Une erreur est survenue en calculant le tableau croisé.",
        uiRenderError: "Une erreur est survenue en dessinant l'interface du tableau croisé dynamique.",
        selectAll: "Sélectionner tout",
        selectNone: "Sélectionner rien",
        tooMany: "(trop de valeurs à afficher)",
        filterResults: "Filtrer les valeurs",
        totals: "Totaux",
        vs: "sur",
        by: "par",
        apply: "Aplicar",
        cancel: "Cancelar"
      },
      aggregators: {
        "Nombre": tpl.count(esFmtInt),
        "Nombre de valeurs uniques": tpl.countUnique(esFmtInt),
        "Liste de valeurs uniques": tpl.listUnique(", "),
        "Somme": tpl.sum(esFmt),
        "Somme en entiers": tpl.sum(esFmtInt),
        "Moyenne": tpl.average(esFmt),
        "Minimum": tpl.min(esFmt),
        "Maximum": tpl.max(esFmt),
        "Premier": tpl.first(esFmt),
        "Dernier": tpl.last(esFmt),
        "Ratio de sommes": tpl.sumOverSum(esFmt),
        "Borne supérieure 80%": tpl.sumOverSumBound80(true, esFmt),
        "Borne inférieure 80%": tpl.sumOverSumBound80(false, esFmt),
        "Somme en proportion du totale": tpl.fractionOf(tpl.sum(), "total", esFmtPct),
        "Somme en proportion de la ligne": tpl.fractionOf(tpl.sum(), "row", esFmtPct),
        "Somme en proportion de la colonne": tpl.fractionOf(tpl.sum(), "col", esFmtPct),
        "Nombre en proportion du totale": tpl.fractionOf(tpl.count(), "total", esFmtPct),
        "Nombre en proportion de la ligne": tpl.fractionOf(tpl.count(), "row", esFmtPct),
        "Nombre en proportion de la colonne": tpl.fractionOf(tpl.count(), "col", esFmtPct)
      },
      renderers: {
        "Table": $.pivotUtilities.renderers["Table"],
        "Table avec barres": $.pivotUtilities.renderers["Table Barchart"],
        "Carte de chaleur": $.pivotUtilities.renderers["Heatmap"],
        "Carte de chaleur par ligne": $.pivotUtilities.renderers["Row Heatmap"],
        "Carte de chaleur par colonne": $.pivotUtilities.renderers["Col Heatmap"]
      }
    };
  });

}).call(this);
