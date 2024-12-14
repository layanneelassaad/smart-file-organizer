let fileMetadata = {}; // Object to temporarily store metadata about a download

// Triggered when a new download starts
chrome.downloads.onCreated.addListener((downloadItem) => {
  fileMetadata = {
    fileName: "Unknown", // Initialize with placeholder
    filePath: "", // Placeholder for the file path
    downloadURL: downloadItem.url || "Unknown", // URL of the download origin
    extension: "Unknown" // Placeholder for the file extension
  };
  console.log("Download Started:", fileMetadata);
});

// Triggered when the download changes state (e.g., completes)
chrome.downloads.onChanged.addListener((downloadDelta) => {
  if (downloadDelta.state && downloadDelta.state.current === "complete") {
    chrome.downloads.search({ id: downloadDelta.id }, (results) => {
      if (results.length > 0) {
        const downloadItem = results[0];
        fileMetadata.filePath = downloadItem.filename || ""; // Full path of the file
        fileMetadata.fileName = extractFileName(downloadItem.filename); // Extract file name
        fileMetadata.extension = extractFileExtension(downloadItem.filename); // Extract file extension

        console.log("Download Completed:", fileMetadata);

        // Save the metadata to chrome.storage for use in popup.js
        chrome.storage.local.set({ lastDownload: fileMetadata }, () => {
          console.log("Saved file metadata to chrome.storage:", fileMetadata);
        });
      }
    });
  }
});

// Extract file name from the full file path
function extractFileName(filePath) {
  if (!filePath) return "Unknown";
  const pathParts = filePath.split(/[\\/]/);
  return pathParts.pop();
}

// Extract file extension from the file name
function extractFileExtension(filePath) {
  if (!filePath) return "Unknown";
  const pathParts = filePath.split(/[\\/]/);
  const fileName = pathParts.pop();
  return fileName.includes(".") ? fileName.split(".").pop() : "No Extension";
}
