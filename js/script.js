
var jpdbBaseURL = "http://api.login2explore.com:5577"
var jpdbIRL = "/api/irl"
var jpdbIML = "/api/iml"
var shipmentDB = "DELIVERY-DB"
var shipmentRelation = "SHIPMENT-TABLE"
var connectionToken = "90931965|-31949303057903837|90960493"

$("#shipmentId").focus();
function validateData() {
    var shipmentIdVar = $("#shipmentId").val();
    if (shipmentIdVar === "") {
        alert("shipment ID Required Value");
        $("#shipmentId").focus();
        return "";
    }
    var shipmentDescriptionVar = $("#shipmentDescription").val();
    if (shipmentDesVar === "") {
        alert("shipment Desciption is Required Value");
        $("#shipmentDes").focus();
        return "";
    }
    var shipmentSourceVar = $("#shipmentSource").val();
    if (shipmentSourceVar === "") {
        alert("shipment Source is Required Value");
        $("#shipmentSource").focus();
        return "";
    }
    var shipmentDesVar = $("#shipmentDes").val();
    if (shipmentDesVar === "") {
        alert("shipment Destination is Required Value");
        $("#shipmentDes").focus();
        return "";
    }
    var shipmentDateVar = $("#shipmentDate").val();
    if (shipmentDateVar === "") {
        alert("shipment Date is Required Value");
        $("#shipmentDate").focus();
        return "";
    }
    var shipmentDelVar = $("#shipmentDel").val();
    if (shipmentDelVar === "") {
        alert("shipment Delivery is Required Value");
        $("#shipmentDel").focus();
        return "";
    }
    var jsonStrObj = {
        ShipmentNo: shipmentIdVar,
        Description: shipmentDescriptionVar,
        Source: shipmentSourceVar,
        Destination: shipmentDesVar,
        ShippingDate: shipmentDateVar,
        ExpectedDeliveryDate: shipmentDelVar,
    };
    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#shipmentId").val("")
    $("#shipmentDescription").val("");
    $("#shipmentSource").val("");
    $("#shipmentDes").val("")
    $("#shipmentDate").val("");
    $("#shipmentDel").val("");
    $("#shipmentId").prop("disabled", false)
    $("#shipmentSave").prop("disabled", true)
    $("#shipmentChange").prop("disabled", true)
    $("#shipmentReset").prop("disabled", true)
    $("#shipmentId").focus();
}
function saveShipment() {
    var jsonStr = validateData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest(connectionToken,
        jsonStr, shipmentDB, shipmentRelation);
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
        jpdbBaseURL, jpdbIML);
    //alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
}

function getshipmentJsonObject() {
    var shipmentid = $('#shipmentId').val()
    var jsonStr = {
        ShipmentNo: shipmentid,
    }
    return JSON.stringify(jsonStr)
}

function saveRecordNoToLS(jsonObj) {
    var data = JSON.parse(jsonObj.data)
    localStorage.setItem('record number', data.rec_no)
}

function fillrecord(jsonObj) {
    saveRecordNoToLS(jsonObj)
    var record = JSON.parse(jsonObj.data).record

    $('#shipmentDescription').val(record.Description)
    $('#shipmentSource').val(record.Source)
    $('#shipmentDes').val(record.Destination)
    $('#shipmentDate').val(record.ShippingDate)
    $('#shipmentDel').val(record.ExpectedDeliveryDate)

}

function searchshipment() {
    var shipmentIdJsonObj = getshipmentJsonObject();
    var getRequest = createGET_BY_KEYRequest(connectionToken, shipmentDB, shipmentRelation, shipmentIdJsonObj)
    jQuery.ajaxSetup({ async: false });
    var resObj = executeCommandAtGivenBaseUrl(getRequest,
        jpdbBaseURL, jpdbIRL);

    jQuery.ajaxSetup({ async: true });

    if (resObj.status === 400) {
        $('#shipmentSave').prop("disabled", false)
        $('#shipmentReset').prop("disabled", false)

        $("#shipmentDescription").prop("disabled", false);
        $("#shipmentSource").prop("disabled", false);
        $("#shipmentDes").prop("disabled", false)
        $("#shipmentDate").prop("disabled", false);
        $("#shipmentDel").prop("disabled", false);

        $('#shipmentDescription').focus()
    }
    else if (resObj.status === 200) {
        $('#shipmentId').prop("disabled", true)
        fillrecord(resObj)

        $("#shipmentDescription").prop("disabled", false);
        $("#shipmentSource").prop("disabled", false);
        $("#shipmentDes").prop("disabled", false)
        $("#shipmentDate").prop("disabled", false);
        $("#shipmentDel").prop("disabled", false);

        $('#shipmentChange').prop("disabled", false)
        $('#shipmentReset').prop("disabled", false)
        $('#shipmentDescription').focus()

    }
}



function changeshipmentData() {
    $('#shipmentChange').prop('disabled', true)

    jsonChg = validateData()
    var updateReq = createUPDATERecordRequest(connectionToken, jsonChg, shipmentDB, shipmentRelation, localStorage.getItem('record number'))

    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(updateReq,
        jpdbBaseURL, jpdbIML);
    //alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });

    resetForm()
    $('#shipmentId').focus()

}
