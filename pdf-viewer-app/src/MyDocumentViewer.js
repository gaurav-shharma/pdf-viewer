import React, { useState } from 'react';
import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import '@cyntler/react-doc-viewer/dist/index.css';

const PdfViewer = () => {
  const [docs, setDocs] = useState([]);

  // Handle file input change (for blob files)
  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const fileUrl = URL.createObjectURL(file); // Convert the file to a URL for the viewer
      setDocs([{ uri: fileUrl, fileName: file.name }]); // Update the docs state with the new file
    }
  };

  // Handle setting a PDF URL (for remote URL-based PDF)
  const handleUrlChange = (e) => {
    const url = e.target.value;
    if (url) {
      setDocs([{ uri: url }]); // Update the docs state with the new URL
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>PDF Viewer</h2>

      {/* File input for blob PDF upload */}
      <div>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          style={{ marginBottom: '10px' }}
        />
      </div>

      {/* Input for setting a PDF URL */}
      <div>
        <input
          type="text"
          placeholder="Enter PDF URL"
          onChange={handleUrlChange}
          style={{ marginBottom: '10px', width: '300px' }}
        />
      </div>

      {/* Display the document viewer */}
      <DocViewer
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ width: '100%', height: '600px' }} // Adjust the height as needed
      />
    </div>
  );
};

export default PdfViewer;
