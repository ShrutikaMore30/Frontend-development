// src/cloudinary/cloudinaryService.js

export async function uploadImageToCloudinary(file) {
    const url = "https://api.cloudinary.com/v1_1/dx9slrypz/image/upload"; // 🔁 Replace
  
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Blog_upload_preset"); // 🔁 Replace
  
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error("Image upload failed");
    }
  
    const data = await response.json();
    return data.secure_url;
  }
  // dx9slrypz