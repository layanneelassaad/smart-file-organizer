document.addEventListener('DOMContentLoaded', () => {
    const statusElement = document.getElementById('status');
  
    // Fetch the last downloaded file's metadata from chrome.storage
    chrome.storage.local.get("lastDownload", (data) => {
      if (data.lastDownload) {
        const { fileName, filePath, downloadURL, extension } = data.lastDownload;
  
        // Update the popup content with metadata
        statusElement.innerHTML = `
          <span class="label">File Name:</span> <span class="value">${fileName}</span><br>
          <span class="label">File Path:</span> <span class="value">${filePath}</span><br>
          <span class="label">File Extension:</span> <span class="value">${extension}</span><br>
          <span class="label">Download URL:</span> <span class="value">${downloadURL}</span>
        `;
      } else {
        statusElement.textContent = "No recent downloads captured.";
      }
    });
  });
  