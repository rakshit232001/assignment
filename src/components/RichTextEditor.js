import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ userData }) => {
  const [content, setContent] = useState("");

  // Update content whenever userData changes
  useEffect(() => {
    const formattedContent = `
      <p><strong>User ID:</strong> ${userData.id}</p>
      <p><strong>Name:</strong> ${userData.name}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
      <p><strong>Address:</strong> ${userData.address}</p>
    `;
    setContent(formattedContent);
  }, [userData]);

  return (
    <ReactQuill
      value={content}
      onChange={setContent}
      modules={RichTextEditor.modules}
      formats={RichTextEditor.formats}
      theme="snow"
      style={{ height: "44.5vh" }}
    />
  );
};

// React Quill modules for formatting options
RichTextEditor.modules = {
  toolbar: [
    [{ bold: true }, { italic: true }, { underline: true }], // Basic Formatting
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    [{ align: [] }], // Text alignment
    ["clean"], // Remove formatting
  ],
};

RichTextEditor.formats = [
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "align",
];

export default RichTextEditor;
