// Hardcoded accounts for the demo — this is the entire "auth system" for now.
// Once hosted for real, this would be replaced by a real login check
// against a database, but the logic that reads the result stays the same.
const staffAccounts = [
  {
    staffId: "REC-001",
    password: "pass123",
    name: "Mrs. Adaobi Chukwu",
    role: "Receptionist",
  },
  {
    staffId: "DOC-001",
    password: "pass123",
    name: "Dr. Adewale",
    role: "Doctor",
  },
  {
    staffId: "DOC-002",
    password: "pass123",
    name: "Dr. Nwosu",
    role: "Doctor",
  },
  {
    staffId: "ADM-001",
    password: "pass123",
    name: "Mr. Balogun",
    role: "Admin",
  },
];

function submitLogin(e) {
  e.preventDefault();
  const id = document.getElementById("l-id").value.trim();
  const pass = document.getElementById("l-pass").value;
  const errorBox = document.getElementById("login-error");

  const account = staffAccounts.find(
    (a) =>
      a.staffId.toLowerCase() === id.toLowerCase().trim() &&
      a.password === pass,
  );

  if (!account) {
    errorBox.innerHTML = `<div class="error-msg">Staff ID or password not recognized.</div>`;
    return false;
  } else {
    errorBox.innerHTML = "";
  }

  // ---- In the full build, this is where we'd redirect based on role:
  //   Receptionist -> receptionist.html
  //   Doctor       -> doctor.html
  //   Admin        -> admin.html
  // For now, we just show which dashboard *would* load. ----
  document.getElementById("result-name").textContent = account.name;
  document.getElementById("result-role").textContent = "Logged in as " + account.role;
  sessionStorage.setItem('loggedInRole', account.role);
  document.getElementById("login-view").style.display = "none";
  document.getElementById("result-view").style.display = "block";

  const roleRedirects = {
    Receptionist: "receptionist.html",
    Doctor: "doctor.html",
    Admin: "admin.html",
  };

  setTimeout(() => {
    window.location.href = roleRedirects[account.role];
  }, 1200);
  return false;
}
