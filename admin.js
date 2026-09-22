/* ============================================================
   MOCK DATA
   ============================================================ */
function offsetDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}
function initials(name) {
  return name
    .split(" ")
    .filter((w) => !/^(Mrs\.|Mr\.|Dr\.)$/.test(w))
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

const patients = [
  {
    type: "Student",
    name: "Adaeze Okonkwo",
    id: "24/1234",
    level: "200L",
    dept: "Computer Science",
    email: "mrcool@gmail.com",
    phoneNumber: "+2348012345678",
    dob: "2004-02-15",
    bgroup: "O+",
    allergies: "None known",
    emergencyContact: "+2348012345678",
    contactName: "Chinwe Okonkwo",
    relationship: "Mother",
    healthNotes: "i have a history of mild asthma. Ensure inhaler is available during visits.",
    lastVisit: "2026-08-04",
  },
  {
    type: "Student",
    name: "Olusanya Uthman",
    id: "24/0539",
    level: "300L",
    dept: "Computer Science",
    email: "mrcool@gmail.com",
    phoneNumber: "+2348012345678",
    dob: "2004-02-15",
    bgroup: "O+",
    allergies: "None known",
    emergencyContact: "+2348012345678",
    contactName: "Uthman Olusanya",
    relationship: "Father",
    healthNotes: null,
    lastVisit: "2026-08-09",
  },
  {
    type: "Staff",
    name: "Mr Balogun Adebayo",
    id: "STAFF-204",
    level: null,
    dept: "Security",
    email: "balo@gmail.com",
    phoneNumber: "+2348000000001",
    dob: "1980-02-15",
    bgroup: "A+",
    allergies: "None known",
    emergencyContact: "+2348012345679",
    contactName: "Sofia adebayo",
    relationship: "Wife",
    healthNotes: null,
    lastVisit: "2026-08-04",
  },
  {
  type: "Student",
  name: "Chidera Nwosu",
  id: "24/1842",
  level: "200L",
  dept: "Computer Science",
  email: "chidera.nwosu@example.com",
  phoneNumber: "+2348012345671",
  dob: "2005-06-18",
  bgroup: "O+",
  allergies: "None known",
  emergencyContact: "+2348034567891",
  contactName: "Ngozi Nwosu",
  relationship: "Mother",
  healthNotes: "Occasional seasonal allergies. No other concerns reported.",
  lastVisit: "2026-08-12",
  },
  {
  type: "Staff",
  name: "Mrs Grace Adeyemi",
  id: "STAFF-118",
  level: null,
  dept: "Registry",
  email: "grace.adeyemi@example.com",
  phoneNumber: "+2348023456782",
  dob: "1978-11-09",
  bgroup: "A+",
  allergies: "None known",
  emergencyContact: "+2348056789123",
  contactName: "Tunde Adeyemi",
  relationship: "Husband",
  healthNotes: null,
  lastVisit: "2026-07-28",
  },
  {
  type: "Student",
  name: "Ibrahim Musa",
  id: "23/0976",
  level: "300L",
  dept: "Economics",
  email: "ibrahim.musa@example.com",
  phoneNumber: "+2348098765432",
  dob: "2003-09-22",
  bgroup: "B+",
  allergies: "Peanuts",
  emergencyContact: "+2348076543210",
  contactName: "Amina Musa",
  relationship: "Sister",
  healthNotes: "Please note food allergy during any clinical visit.",
  lastVisit: "2026-08-20",
  },
  {
  type: "Staff",
  name: "Mr Chukwuemeka Okafor",
  id: "STAFF-347",
  level: null,
  dept: "Works Department",
  email: "chukwuemeka.okafor@example.com",
  phoneNumber: "+2348065432198",
  dob: "1985-04-03",
  bgroup: "O-",
  allergies: "None known",
  emergencyContact: "+2348087654321",
  contactName: "Amarachi Okafor",
  relationship: "Wife",
  healthNotes: "History of mild hypertension.",
  lastVisit: "2026-08-07",
  },
  {
  type: "Student",
  name: "Temiloluwa Johnson",
  id: "25/0621",
  level: "100L",
  dept: "Mass Communication",
  email: "temiloluwa.johnson@example.com",
  phoneNumber: "+2348101234567",
  dob: "2006-01-14",
  bgroup: "A-",
  allergies: "None known",
  emergencyContact: "+2348112345678",
  contactName: "Bola Johnson",
  relationship: "Father",
  healthNotes: null,
  lastVisit: "2026-08-25",
},

{
  type: "Staff",
  name: "Dr Fatima Bello",
  id: "STAFF-092",
  level: null,
  dept: "Academic Planning",
  email: "fatima.bello@example.com",
  phoneNumber: "+2348123456789",
  dob: "1976-07-30",
  bgroup: "AB+",
  allergies: "Penicillin",
  emergencyContact: "+2348134567890",
  contactName: "Yusuf Bello",
  relationship: "Brother",
  healthNotes: null,
  lastVisit: "2026-08-18",
},

{
  type: "Student",
  name: "Samuel Eze",
  id: "24/2157",
  level: "400L",
  dept: "Electrical Engineering",
  email: "samuel.eze@example.com",
  phoneNumber: "+2348145678901",
  dob: "2002-12-05",
  bgroup: "O+",
  allergies: "None known",
  emergencyContact: "+2348156789012",
  contactName: "Grace Eze",
  relationship: "Mother",
  healthNotes: "Occasional fatigue reported during periods of high academic workload.",
  lastVisit: "2026-08-30",
},


];

let appointments = [
  {
    recordId: "STAFF-347",
    name: "Mr Chukwuemeka Okafor",
    date: offsetDate(0),
    time: "13:00",
    doctor: "Dr. Bello",
    status: "pending",
  },
  {
    recordId: "23/0976",
    name: "Ibrahim Musa",
    date: offsetDate(-2),
    time: "09:30",
    doctor: "Dr. Nwosu",
    status: "pending",
  },
  {
    recordId: "24/1842",
    name: "Chidera Nwosu",
    date: offsetDate(-3),
    time: "14:00",
    doctor: "Dr. Adewale",
    status: "pending",
  },
  {
    recordId: "STAFF-204",
    name: "Mr Balogun Adebayo",
    date: offsetDate(-4),
    time: "11:00",
    doctor: "Dr. Bello",
    status: "completed",
  },
  {
    recordId: "24/1234",
    name: "Adaeze Okonkwo",
    date: offsetDate(-5),
    time: "10:30",
    doctor: "Dr. Adewale",
    status: "completed",
  },
  {
    recordId: "STAFF-118",
    name: "Mrs Grace Adeyemi",
    date: offsetDate(-6),
    time: "09:00",
    doctor: "Dr. Nwosu",
    status: "completed",
  },
  {
    recordId: "25/0621",
    name: "Temiloluwa Johnson",
    date: offsetDate(-6),
    time: "08:00",
    doctor: "Dr. Adewale",
    status: "completed",
  },
];


let prescriptions = [
  {
    recordId: "STAFF-204",
    name: "Mr Balogun Adebayo",
    condition: "Routine medical check",
    medication: "Paracetamol 500mg, 2x daily PRN",
    date: offsetDate(-4),
    status: "completed",
    doctor: "Dr. Bello",
  },
  {
    recordId: "24/1234",
    name: "Adaeze Okonkwo",
    condition: "Mild asthma symptoms",
    medication: "Salbutamol Inhaler, 2 puffs PRN",
    date: offsetDate(-5),
    status: "completed",
    doctor: "Dr. Adewale",
  },
  {
    recordId: "STAFF-118",
    name: "Mrs Grace Adeyemi",
    condition: "General health assessment",
    medication: "Paracetamol 500mg, 2x daily PRN",
    date: offsetDate(-6),
    status: "completed",
    doctor: "Dr. Nwosu",
  },
  {
    recordId: "25/0621",
    name: "Temiloluwa Johnson",
    condition: "Tension headache",
    medication: "Ibuprofen 400mg, PRN",
    date: offsetDate(-6),
    status: "completed",
    doctor: "Dr. Adewale",
  },
];

let staffAccounts = [
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
];

let currentTab = "dashboard";

/* ============ SIDEBAR (mobile) ============ */
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("sidebar-backdrop").classList.toggle("open");
}

/* ============ TAB SWITCHING ============ */
function switchTab(tab) {
  currentTab = tab;
  [
    "dashboard",
    "patients",
    "appointments",
    "prescriptions",
    "staff",
    "qr",
    "reports",
  ].forEach((t) => {
    document.getElementById("tab-" + t).style.display =
      t === tab ? "block" : "none";
    document.getElementById("nav-" + t).classList.toggle("active", t === tab);
  });
  if (window.innerWidth <= 860) {
    toggleSidebar();
  }

  if (tab === "dashboard") renderDashboard();
  if (tab === "patients") renderPatientsList();
  if (tab === "appointments") renderAppointments();
  if (tab === "prescriptions") renderPrescriptionsAdmin();
  if (tab === "staff") renderStaffTable();
  if (tab === "qr") renderQr();
  if (tab === "reports") renderReports();
}

function statusPill(status) {
  const cls = status === "completed" ? "completed" : "pending";
  return `<span class="pill ${cls}"><span class="pill-dot"></span>${status}</span>`;
}
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.style.display = "flex";
  setTimeout(() => {
    t.style.display = "none";
  }, 2400);
}

/* ============ DASHBOARD TAB ============ */
function renderDashboard() {
  const pending = appointments.filter((a) => a.status === "pending").length;
  const todayCheckins = appointments.filter(
    (a) => a.date === offsetDate(0),
  ).length;

  document.getElementById("dashboard-stats").innerHTML = `
    <div class="card"><div class="stat-label">Registered Patients</div><div class="stat-num">${patients.length}</div></div>
    <div class="card"><div class="stat-label">Pending Appointments</div><div class="stat-num" style="color:${pending ? "var(--accent-warn)" : "inherit"}">${pending}</div></div>
    <div class="card"><div class="stat-label">Today's Appointments</div><div class="stat-num">${todayCheckins}</div></div>`;

  renderDashboardVisits();
}

// ---- Shows students/staff whose appointments were Completed within the selected time range ----
function renderDashboardVisits() {
  const rangeDays = parseInt(
    document.getElementById("visit-range-filter").value,
    10,
  );
  const cutoff = offsetDate(-rangeDays);

  const visits = appointments
    .filter((a) => a.status === "completed" && a.date >= cutoff)
    .sort((a, b) => b.date.localeCompare(a.date));

  const container = document.getElementById("dashboard-recent");
  if (visits.length === 0) {
    container.innerHTML = `<div class="empty-state"><p class="empty-title">No visits in this range</p><p>Try a wider time range.</p></div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Name</th><th>ID</th><th>Date Visited</th></tr></thead>
      <tbody>
        ${visits
          .map(
            (a) => `
          <tr class="row-clickable" onclick="switchTab('patients'); setTimeout(()=>openPatientDetail('${a.recordId}'),0);">
            <td style="font-weight:600;">${a.name}</td>
            <td><span class="id-chip">${a.recordId}</span></td>
            <td>${a.date}</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
}

/* ============ PATIENTS TAB ============ */
function renderPatientsList() {
  document.getElementById("patient-detail-view").style.display = "none";
  document.getElementById("patients-list-view").style.display = "block";

  const q = document
    .getElementById("patient-search")
    .value.trim()
    .toLowerCase();
  const filtered = patients
    .filter((p) => p.name.toLowerCase().includes(q))
    .sort((a, b) => a.name.localeCompare(b.name));

  const container = document.getElementById("az-patients");
  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><p class="empty-title">No matching patients</p></div>`;
    return;
  }

  let html = "";
  let lastLetter = "";
  filtered.forEach((p) => {
    const letter = p.name[0].toUpperCase();
    if (letter !== lastLetter) {
      html += `<div class="az-group-label">${letter}</div>`;
      lastLetter = letter;
    }
    html += `
      <div class="patient-row" onclick="openPatientDetail('${p.id}')">
        <div class="p-avatar">${initials(p.name)}</div>
        <div><div class="p-name">${p.name}</div><div class="p-meta">${p.id} · ${p.type} · ${p.dept}</div></div>
        <div class="blood-chip">${p.bgroup}</div>
      </div>`;
  });
  container.innerHTML = html;
}

function openPatientDetail(id) {
  const p = patients.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("patients-list-view").style.display = "none";
  const view = document.getElementById("patient-detail-view");
  view.style.display = "block";

  const rx = prescriptions.filter((r) => r.recordId === id);
  const appts = appointments.filter((a) => a.recordId === id);

  view.innerHTML = `
    <button class="back-link" onclick="renderPatientsList()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6"/></svg>
      Back to patients
    </button>
    <div class="card">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:16px;">
        <div class="patient-avatar">${initials(p.name)}</div>
        <div><h2 style="font-size:19px;">${p.name}</h2><div class="page-sub"><span class="id-chip">${p.id}</span> · ${p.type} · ${p.classDept}</div></div>
      </div>
      <div class="kv"><span>Blood Group</span><span>${p.bgroup}</span></div>
      <div class="kv"><span>Date of Birth</span><span>${p.dob}</span></div>
      <div class="kv"><span>Allergies</span><span>${p.allergies}</span></div>
      ${p.healthNotes ? `<div class="wellbeing-note"><strong>Wellbeing note:</strong> ${p.healthNotes}</div>` : ""}
    </div>
    <div class="card">
      <div class="card-title" style="margin-bottom:12px;">Contact</div>
      <div class="kv"><span>Phone Number</span><span>${p.phoneNumber}</span></div>
      <div class="kv"><span>Email</span><span style="font-size:12px;">${p.email}</span></div>
      <div style="height:1px; background:var(--line); margin:10px 0;"></div>
      <div class="kv"><span>Emergency Contact</span><span>${p.emergencyContact}</span></div>
      <div class="kv"><span>Emergency Number</span><span>${p.contactName}</span></div>
    </div>
    <div class="card">
      <div class="card-title">Appointment History</div>
      ${appts.length ? appts.map((a) => `<div class="kv"><span>${a.date}</span><span class="pill ${a.status}">${statusPill(a.status)}</span></div>`).join("") : `<p style="color:var(--ink-faint); font-size:13px;">No appointments on file.</p>`}
    </div>
    <div class="card">
      <div class="card-title">Prescription History</div>
      ${
        rx.length
          ? rx
              .map(
                (r) => `
        <div style="padding:10px 0; border-bottom:1px solid var(--line);">
          <div style="font-weight:600; font-size:13px;">${r.condition}</div>
          <div style="font-size:12.5px; color:var(--ink-soft); margin-top:2px;">${r.medication}</div>
          <div style="font-size:11.5px; color:var(--ink-faint); margin-top:3px;">${r.doctor} · ${r.date}</div>
        </div>`,
              )
              .join("")
          : `<p style="color:var(--ink-faint); font-size:13px;">No prescriptions on file.</p>`.slice(0, 5)
      }
    </div>`;
}

/* ============ APPOINTMENTS TAB ============ */
function renderAppointments() {
  const filter = document.getElementById("appt-filter").value;
  const list =
    filter === "all"
      ? appointments
      : appointments.filter((a) => a.status === filter);
  const container = document.getElementById("appointments-table");

  if (list.length === 0) {
    container.innerHTML = `<div class="empty-state"><p class="empty-title">No appointments for this filter</p></div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Matric / Staff ID</th><th>Patient</th><th>Date</th><th>Time</th><th>Doctor</th><th>Status</th></tr></thead>
      <tbody>
        ${list
          .map(
            (a) => `
          <tr class="row-clickable" onclick="switchTab('patients'); setTimeout(()=>openPatientDetail('${a.recordId}'),0);">
            <td><span class="id-chip">${a.recordId}</span></td>
            <td style="font-weight:600;">${a.name}</td>
            <td>${a.date}</td>
            <td>${a.time}</td>
            <td>${a.doctor}</td>
            <td>${statusPill(a.status)}</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
}

/* ============ PRESCRIPTIONS TAB ============ */
function renderPrescriptionsAdmin() {
  const container = document.getElementById("prescriptions-admin-table");

  if (prescriptions.length === 0) {
    container.innerHTML = `<div class="empty-state"><p class="empty-title">No prescriptions yet</p></div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Matric / Staff ID</th><th>Patient</th><th>Condition</th><th>Medication</th><th>Date</th><th>Doctor</th><th>Status</th></tr></thead>
      <tbody>
        ${prescriptions
          .map(
            (r) => `
          <tr class="row-clickable" onclick="switchTab('patients'); setTimeout(()=>openPatientDetail('${r.recordId}'),0);">
            <td><span class="id-chip">${r.recordId}</span></td>
            <td style="font-weight:600;">${r.name}</td>
            <td>${r.condition}</td>
            <td>${r.medication}</td>
            <td>${r.date}</td>
            <td>${r.doctor}</td>
            <td>${statusPill(r.status)}</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
}

/* ============ STAFF ACCOUNTS TAB ============ */
function renderStaffTable() {
  const container = document.getElementById("staff-table");
  container.innerHTML = `
    <table>
      <thead><tr><th>Staff ID</th><th>Name</th><th>Role</th><th>Password</th><th></th></tr></thead>
      <tbody>
        ${staffAccounts
          .map(
            (s, i) => `
          <tr>
            <td><span class="id-chip">${s.staffId}</span></td>
            <td style="font-weight:600;">${s.name}</td>
            <td><span class="role-badge ${s.role}">${s.role}</span></td>
            <td class="id-chip">${s.password}</td>
            <td><button class="btn btn-danger" onclick="removeStaff(${i})">Remove</button></td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
}

function openStaffModal() {
  document.getElementById("staff-name").value = "";
  document.getElementById("staff-role").value = "Receptionist";
  document.getElementById("staff-id").value = "";
  document.getElementById("staff-password").value = "";
  document.getElementById("staff-error").innerHTML = "";
  document.getElementById("staff-modal-backdrop").classList.add("open");
}
function closeStaffModal() {
  document.getElementById("staff-modal-backdrop").classList.remove("open");
}

function submitStaff() {
  const name = document.getElementById("staff-name").value.trim();
  const role = document.getElementById("staff-role").value;
  const staffId = document.getElementById("staff-id").value.trim();
  const password = document.getElementById("staff-password").value.trim();
  const errorBox = document.getElementById("staff-error");

  if (!name || !staffId || !password) {
    errorBox.innerHTML = `<div class="error-msg">Please fill in name, staff ID, and password.</div>`;
    return;
  }
  if (
    staffAccounts.some((s) => s.staffId.toLowerCase() === staffId.toLowerCase())
  ) {
    errorBox.innerHTML = `<div class="error-msg">That Staff ID is already in use.</div>`;
    return;
  }

  staffAccounts.push({ staffId, password, name, role });
  closeStaffModal();
  renderStaffTable();
  showToast(`${name} can now log in with Staff ID ${staffId}`);
}

let pendingRemoveIndex = null;

function removeStaff(index) {
  pendingRemoveIndex = index;
  const s = staffAccounts[index];
  document.getElementById("confirm-remove-text").textContent =
    `Remove ${s.name}'s account? They will no longer be able to log in.`;
  document.getElementById("confirm-remove-backdrop").classList.add("open");
}
function closeConfirmRemove() {
  document.getElementById("confirm-remove-backdrop").classList.remove("open");
  pendingRemoveIndex = null;
}
function confirmRemoveStaff() {
  if (pendingRemoveIndex === null) return;
  const s = staffAccounts[pendingRemoveIndex];
  staffAccounts.splice(pendingRemoveIndex, 1);
  closeConfirmRemove();
  renderStaffTable();
  showToast(`${s.name}'s account was removed`);
}

/* ============ QR CODE TAB ============ */
function renderQr() {
  const target = document.getElementById("qr-canvas");
  target.innerHTML = "";
  if (window.QRCode) {
    new QRCode(target, {
      text:
        document.getElementById("qr-url-input").value ||
        "https://auhealthportal.example/register.html",
      width: 168,
      height: 168,
      colorDark: "#16204A",
      colorLight: "#ffffff",
    });
  }
}
function regenerateQr() {
  renderQr();
  showToast("QR code regenerated");
}

/* ============ REPORTS TAB ============ */
function renderReports() {
  // Most treated conditions, ranked highest first
  const condCounts = {};
  prescriptions.forEach((r) => {
    condCounts[r.condition] = (condCounts[r.condition] || 0) + 1;
  });
  const sortedConditions = Object.entries(condCounts).sort(
    (a, b) => b[1] - a[1],
  );

  document.getElementById("report-conditions").innerHTML =
    sortedConditions.length
      ? sortedConditions
          .map(
            ([cond, count], i) => `
    <div class="rank-row">
      <div class="rank-num">${i + 1}</div>
      <div class="rank-label">${cond}</div>
      <div class="rank-value">${count} case${count === 1 ? "" : "s"}</div>
    </div>`,
          )
          .join("")
      : `<p style="color:var(--ink-faint); font-size:13px;">No prescription data yet.</p>`;

  // Most used drugs, ranked highest first
  const drugCounts = {};
  prescriptions.forEach((r) => {
    drugCounts[r.medication] = (drugCounts[r.medication] || 0) + 1;
  });
  const sortedDrugs = Object.entries(drugCounts).sort((a, b) => b[1] - a[1]);

  document.getElementById("report-drugs").innerHTML = sortedDrugs.length
    ? sortedDrugs
        .map(
          ([drug, count], i) => `
    <div class="rank-row">
      <div class="rank-num">${i + 1}</div>
      <div class="rank-label">${drug}</div>
      <div class="rank-value">${count} time${count === 1 ? "" : "s"}</div>
    </div>`,
        )
        .join("")
    : `<p style="color:var(--ink-faint); font-size:13px;">No prescription data yet.</p>`;

  // Prescriptions per doctor, ranked highest first
  const doctorNames = [...new Set(prescriptions.map((r) => r.doctor))];
  const doctorCounts = doctorNames
    .map((d) => ({
      label: d,
      count: prescriptions.filter((r) => r.doctor === d).length,
    }))
    .sort((a, b) => b.count - a.count);

  document.getElementById("report-rx-by-doctor").innerHTML = doctorCounts
    .map(
      (d, i) => `
    <div class="rank-row">
      <div class="rank-num">${i + 1}</div>
      <div class="rank-label">${d.label}</div>
      <div class="rank-value">${d.count} prescription${d.count === 1 ? "" : "s"}</div>
    </div>`,
    )
    .join("");
}
function exportReport(){
  const days = parseInt(document.getElementById('export-range').value, 10);
  const rangeLabels = { 30:'This Month', 60:'Last 2 Months', 90:'Last 3 Months', 120:'Last 4 Months' };
  const rangeLabel = rangeLabels[days];
  const adminName = document.getElementById('export-admin-name').value.trim();
  const notes = document.getElementById('export-notes').value.trim();

  const cutoff = offsetDate(-days);
  const prevCutoff = offsetDate(-days * 2);
  const today = offsetDate(0);

  // ---- Patients ----
  const studentCount = patients.filter(p => p.type === 'Student').length;
  const staffCount = patients.filter(p => p.type === 'Staff').length;
  const newThisPeriod = patients.filter(p => p.registeredAt >= cutoff).length;
  const newPrevPeriod = patients.filter(p => p.registeredAt >= prevCutoff && p.registeredAt < cutoff).length;

  // ---- Appointments (within the selected range) ----
  const apptsInRange = appointments.filter(a => a.date >= cutoff);
  const completedAppts = apptsInRange.filter(a => a.status === 'Completed').length;
  const pendingAppts = apptsInRange.filter(a => a.status === 'Pending').length;

  // ---- Prescriptions (within the selected range) ----
  const rxInRange = prescriptions.filter(r => r.date >= cutoff);
  const doctorNames = [...new Set(rxInRange.map(r => r.doctor))];
  const doctorRows = doctorNames.map(d =>
    `<tr><td>${d}</td><td>${rxInRange.filter(r => r.doctor === d).length}</td></tr>`
  ).join('');

  // ---- Staff list ----
  const staffRows = staffAccounts.map(s =>
    `<tr><td>${s.name}</td><td>${s.role}</td></tr>`
  ).join('');

  // ---- Build the document's HTML ----
  const htmlContent = `
    <div style="font-family:Arial; padding:20px;">
      <div style="text-align:center; border-bottom:3px solid #1A2E6B; padding-bottom:10px; margin-bottom:20px;">
        <h1 style="color:#1A2E6B; margin:0;">ADELEKE UNIVERSITY</h1>
        <p style="margin:2px 0; color:#4A5578;">Health Portal — Clinic Activity Report</p>
      </div>

      <p><strong>Reporting Period:</strong> ${rangeLabel} (${cutoff} to ${today})</p>
      <p><strong>Date Generated:</strong> ${today}</p>
      <p><strong>Prepared By:</strong> ${adminName || '—'}</p>

      <h2 style="color:#1A2E6B;">1. Patient Registration Summary</h2>
      <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
        <tr><td>Total Registered Patients</td><td>${patients.length}</td></tr>
        <tr><td>Students</td><td>${studentCount}</td></tr>
        <tr><td>Staff</td><td>${staffCount}</td></tr>
        <tr><td>New Registrations (This Period)</td><td>${newThisPeriod}</td></tr>
        <tr><td>New Registrations (Previous Period)</td><td>${newPrevPeriod}</td></tr>
      </table>

      <h2 style="color:#1A2E6B;">2. Appointments Summary</h2>
      <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
        <tr><td>Total Appointments</td><td>${apptsInRange.length}</td></tr>
        <tr><td>Completed</td><td>${completedAppts}</td></tr>
        <tr><td>Pending</td><td>${pendingAppts}</td></tr>
      </table>

      <h2 style="color:#1A2E6B;">3. Prescriptions Summary</h2>
      <p>Total Prescriptions Issued: ${rxInRange.length}</p>
      <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
        <tr><th>Doctor</th><th>Prescriptions</th></tr>
        ${doctorRows}
      </table>

      <h2 style="color:#1A2E6B;">4. Clinic Staff</h2>
      <table border="1" cellpadding="6" style="border-collapse:collapse; width:100%;">
        <tr><th>Name</th><th>Role</th></tr>
        ${staffRows}
      </table>

      <h2 style="color:#1A2E6B;">5. Recommendations / Notes</h2>
      <p>${notes || 'None provided.'}</p>

      <hr style="margin-top:40px;">
      <p style="font-size:11px; color:#888;">CONFIDENTIAL — For internal use by Adeleke University administration only.</p>
      <p style="font-size:11px; color:#888;">Submitted by: ${adminName || '_______________________'}</p>
    </div>`;

  // ---- Convert to a real .docx file and trigger the download ----
  const converted = htmlDocx.asBlob(htmlContent);
  const link = document.createElement('a');
  link.href = URL.createObjectURL(converted);
  link.download = `AU-Health-Report-${today}.docx`;
  link.click();
}

/* ============ INIT ============ */
renderDashboard();
