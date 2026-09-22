let currentType = "Student";

// Toggling Student/Staff:
// - swaps the ID field's label + placeholder (Matric Number <-> Staff ID)
// - shows/hides the Title field (staff only)
// - shows/hides the Level + Faculty fields (student only)
// - swaps the Department field's placeholder text
function setType(type) {
  currentType = type;
  document
    .getElementById("toggle-student")
    .classList.toggle("active", type === "Student");
  document
    .getElementById("toggle-staff")
    .classList.toggle("active", type === "Staff");

  const idLabel = document.getElementById("id-label");
  const idInput = document.getElementById("r-id");
  const titleField = document.getElementById("title-field");
  const studentOnlyFields = document.getElementById("student-only-fields");
  const departmentInput = document.getElementById("r-department");

  if (type === "Student") {
    idLabel.textContent = "Matric Number";
    idInput.placeholder = "e.g. 24/1234";
    titleField.style.display = "none";
    studentOnlyFields.style.display = "block";
    departmentInput.placeholder = "e.g. Computer Science";
  } else {
    idLabel.textContent = "Staff ID";
    idInput.placeholder = "e.g. STAFF-204";
    titleField.style.display = "block";
    studentOnlyFields.style.display = "none";
    departmentInput.placeholder = "e.g. Registry, Bursary, Works Dept.";
  }
}

// Placeholder for where a real backend call would go.
// For this demo, it just validates required fields and shows the success view.
function submitRegistration(e) {
  e.preventDefault();
  const name = document.getElementById("r-name").value.trim();
  const id = document.getElementById("r-id").value.trim();
  const email = document.getElementById("r-email").value.trim();
  const errorBox = document.getElementById("form-error");

  if (!name || !id) {
    errorBox.innerHTML = `<div class="error-msg">Please fill in at least your name and ${currentType === "Student" ? "matric number" : "staff ID"}.</div>`;
    return false;
  }
  if (!email) {
    errorBox.innerHTML = `<div class="error-msg">Please fill in your email address.</div>`;
    return false;
  } else errorBox.innerHTML = "";

  // ---- In the full build, this is where the record gets saved
  // (to localStorage for the demo, or a real database once hosted) ----
  const record = {
    type: currentType,
    title:
      currentType === "Staff" ? document.getElementById("r-title").value : null,
    name,
    id,
    level:
      currentType === "Student"
        ? document.getElementById("r-level").value.trim()
        : null,
    faculty:
      currentType === "Student"
        ? document.getElementById("r-faculty").value
        : null,
    department: document.getElementById("r-department").value.trim(),
    email,
    phone: document.getElementById("r-phone").value.trim(),
    dob: document.getElementById("r-dob").value,
    bloodGroup: document.getElementById("r-blood").value,
    allergies: document.getElementById("r-allergies").value.trim(),
    emergencyPhone: document.getElementById("r-emergency-phone").value.trim(),
    emergencyName: document.getElementById("r-emergency-name").value.trim(),
    emergencyRelationship: document
      .getElementById("r-emergency-relationship")
      .value.trim(),
    mentalHealthNotes: document.getElementById("r-mental").value.trim(),
  };
  console.log("Registered:", record);

  document.getElementById("form-view").style.display = "none";
  document.getElementById("success-view").style.display = "block";
  return false;
}

function resetForm() {
  document.getElementById("reg-form").reset();
  setType("Student");
  document.getElementById("form-view").style.display = "block";
  document.getElementById("success-view").style.display = "none";
}

// ============================================================
// REGISTER PAGE FUNCTIONS — used by register.html
// ============================================================