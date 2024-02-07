const experienceHeading = document.getElementById("experience");
const text = experienceHeading.textContent;

// กำหนดสีสำหรับตัวอักษรทั้งหมด
experienceHeading.style.color = "#37393F";

// กำหนดสีสำหรับอักษรตัวแรก
experienceHeading.innerHTML = `<span style="color: #ED3D3F;">${text.substring(0,2)}</span>${text.substring(2)}`;
