App.FPDynamic.getForm().getFields().each(function(rec){
    console.log(rec.isValid() + ' ' + rec.name)
})
