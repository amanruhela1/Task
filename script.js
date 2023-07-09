$(document).ready(function() {
  // Handle form submission
  $("#document-upload-form").submit(function(e) {
    e.preventDefault();
    var fileInput = $("#document-file");
    var file = fileInput[0].files[0];
    if (file) {
      uploadDocument(file);
      fileInput.val(''); // Clear the file input after submission
    }
  });

  // Function to upload a document
  function uploadDocument(file) {
    var formData = new FormData();
    formData.append("documentFile", file);

    $.ajax({
      url: "/upload/", // Update with the correct URL endpoint
      type: "POST",
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        if (response.success) {
          addDocumentToList(response.document);
          showMessage("Data added successfully!", "success");
        } else {
          showMessage("Error: " + response.error, "error");
        }
      },
      error: function() {
        showMessage("An error occurred while uploading the document.", "error");
      }
    });
  }

  // Function to add a document to the document list
  function addDocumentToList(document) {
    var documentList = $("#document-list");
    var documentItem = $("<div>").addClass("document-item");
    var documentLink = $("<a>").attr("href", "/download/" + document.id).text(document.name);
    documentItem.append(documentLink);
    documentList.append(documentItem);
  }

  // Function to show a message
  function showMessage(message, type) {
    var messageContainer = $("#message-container");
    messageContainer.text(message).addClass(type);
    setTimeout(function() {
      messageContainer.text('').removeClass(type);
    }, 5000);
  }
});

// Show and hide the upload modal
$(document).ready(function() {
  var uploadButton = $("#upload-button");
  var modal = $("#upload-modal");
  var closeButton = $("#close-button");
  var cancelButton = $("#cancel-button");

  uploadButton.click(function() {
    modal.css("display", "block");
  });

  closeButton.click(function() {
    modal.css("display", "none");
  });

  cancelButton.click(function() {
    modal.css("display", "none");
  });
});
