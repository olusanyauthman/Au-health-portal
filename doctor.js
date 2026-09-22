if(sessionStorage.getItem('loggedInRole') !== 'Doctor'){
  window.location.replace('staff.html');
}

function offsetDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

const records = [
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

let currentTab = "patients";
let currentDoctor = "Dr. Adewale"; // in the real build, this comes from the login step

function initials(name) {
  return name
    .split(" ")
    .filter((w) => !/^(Mrs\.|Mr\.|Dr\.)$/.test(w))
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
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

/* ============ TAB SWITCHING ============ */
function switchTab(tab) {
  currentTab = tab;
  ["patients", "appointments", "prescriptions"].forEach((t) => {
    document.getElementById("tab-" + t).style.display =
      t === tab ? "block" : "none";
    document.getElementById("nav-" + t).classList.toggle("active", t === tab);
  });
  if (tab === "patients") renderPatientsList();
  if (tab === "appointments") renderAppointments();
  if (tab === "prescriptions") renderPrescriptions();
}

/* ============ PATIENTS TAB ============ */
function renderPatientsList() {
  document.getElementById("patient-detail-view").style.display = "none";
  document.getElementById("patients-list-view").style.display = "block";

  const q = document
    .getElementById("patient-search")
    .value.trim()
    .toLowerCase();
  const filtered = records
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
        <div>
          <div class="p-name">${p.name}</div>
          <div class="p-meta">${p.id} · ${p.type}${p.level ? ' · ' + p.level : ''} · ${p.dept}</div>
        </div>
        <div class="blood-chip">${p.bgroup}</div>
      </div>`;
  });
  container.innerHTML = html;
}

function openPatientDetail(id) {
  const p = records.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("patients-list-view").style.display = "none";
  const view = document.getElementById("patient-detail-view");
  view.style.display = "block";
  view.innerHTML = `
    <button class="back-link" onclick="renderPatientsList()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M15 18l-6-6 6-6"/></svg>
      Back to patients
    </button>
    <div class="card">
      <div style="display:flex; align-items:center; gap:14px; margin-bottom:16px;">
        <div class="p-avatar" style="width:46px; height:46px; font-size:17px;">${initials(p.name)}</div>
        <div>
          <h2 style="font-size:19px;">${p.name}</h2>
          <div class="page-sub"><span class="id-chip">${p.id}</span> · ${p.type}${p.level ? ' · ' + p.level : ''} · ${p.dept}</div>
        </div>
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
      <div class="kv"><span>Emergency Contact</span><span>${p.contactName}</span></div>
      <div class="kv"><span>Relationship</span><span>${p.relationship}</span></div>
      <div class="kv"><span>Emergency Number</span><span>${p.emergencyContact}</span></div>
    </div>`;
}

/* ============ APPOINTMENTS TAB (read-only) ============ */
function renderAppointments() {
  const container = document.getElementById("appointments-table");
  const pendingCount = appointments.filter(
    (a) => a.status === "pending",
  ).length;
  document.getElementById("pending-badge").textContent = pendingCount;
  document.getElementById("pending-badge").style.display =
    pendingCount > 0 ? "inline-block" : "none";

  if (appointments.length === 0) {
    container.innerHTML = `<div class="empty-state"><p class="empty-title">No appointments booked</p></div>`;
    return;
  }
  container.innerHTML = `
    <table>
      <thead><tr><th>Matric / Staff ID</th><th>Patient</th><th>Date</th><th>Time</th><th>Status</th></tr></thead>
      <tbody>
        ${appointments
          .map(
            (a) => `
          <tr>
            <td><span class="id-chip">${a.recordId}</span></td>
            <td style="font-weight:600;">${a.name}</td>
            <td>${a.date}</td>
            <td>${a.time}</td>
            <td>${statusPill(a.status)}</td>
          </tr>`,
          )
          .join("")}
      </tbody>
    </table>`;
}

/* ============ PRESCRIPTIONS TAB ============ */

// ---- Applies the day filter: all / today / yesterday / this week / last week / last 2 weeks / past 3 months ----
function filterRxByDay(list) {
  const filter = document.getElementById("rx-day-filter").value;
  if (filter === "all") return list;

  const today = new Date(offsetDate(0) + "T00:00:00");
  return list.filter((r) => {
    const rxDate = new Date(r.date + "T00:00:00");
    const daysAgo = Math.round((today - rxDate) / 86400000);

    if (filter === "today") return daysAgo === 0;
    if (filter === "yesterday") return daysAgo === 1;
    if (filter === "thisWeek") return daysAgo >= 0 && daysAgo <= 6;
    if (filter === "lastWeek") return daysAgo >= 7 && daysAgo <= 13;
    if (filter === "last2Weeks") return daysAgo >= 0 && daysAgo <= 13;
    if (filter === "past3Months") return daysAgo >= 0 && daysAgo <= 90;
    return true;
  });
}

function renderPrescriptions() {
  const container = document.getElementById("prescriptions-table");
  const filtered = filterRxByDay(prescriptions);

  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><p class="empty-title">No prescriptions for this filter</p><p>Try a different range, or select "All" to see everything.</p></div>`;
    return;
  }

  container.innerHTML = `
    <table>
      <thead><tr><th>Matric / Staff ID</th><th>Patient</th><th>Condition</th><th>Medication</th><th>Doctor</th><th>Date</th><th>Status</th><th></th></tr></thead>
      <tbody>
        ${filtered
          .map((r) => {
            const i = prescriptions.indexOf(r);
            return `
          <tr>
            <td><span class="id-chip">${r.recordId}</span></td>
            <td style="font-weight:600;">${r.name}</td>
            <td>${r.condition}</td>
            <td>${r.medication}</td>
            <td>${r.doctor}</td>
            <td>${r.date}</td>
            <td>${statusPill(r.status)}</td>
            <td>${r.status === "Pending" ? `<button class="btn btn-complete" onclick="markPrescriptionComplete(${i})">Mark Completed</button>` : ""}</td>
          </tr>`;
          })
          .join("")}
      </tbody>
    </table>`;
}

function markPrescriptionComplete(index) {
  prescriptions[index].status = "Completed";
  renderPrescriptions();
  showToast(`Prescription for ${prescriptions[index].name} marked Completed`);
}

let selectedRxPatientId = null; // tracks which real patient was chosen from suggestions

function openPrescriptionModal() {
  document.getElementById("rx-doctor-display").value = currentDoctor;
  document.getElementById("rx-patient-input").value = "";
  document.getElementById("rx-suggestions").innerHTML = "";
  document.getElementById("rx-suggestions").classList.remove("open");
  selectedRxPatientId = null;
  document.getElementById("rx-condition").value = "";
  document.getElementById("rx-medication").value = "";
  document.getElementById("rx-date").value = "";
  document.getElementById("rx-modal-backdrop").classList.add("open");
}
function closePrescriptionModal() {
  document.getElementById("rx-modal-backdrop").classList.remove("open");
}

// ---- As the doctor types, show matching patients from the real patient database ----
function renderRxSuggestions() {
  const input = document.getElementById("rx-patient-input");
  const box = document.getElementById("rx-suggestions");
  const q = input.value.trim().toLowerCase();
  selectedRxPatientId = null; // typing invalidates any previous selection

  if (q.length === 0) {
    box.classList.remove("open");
    box.innerHTML = "";
    return;
  }

  const matches = records.filter((p) => p.name.toLowerCase().includes(q)).slice(0, 6);
  if (matches.length === 0) {
    box.innerHTML = `<div class="rx-suggestion-item" style="color:var(--ink-faint);">No matching patient</div>`;
    box.classList.add("open");
    return;
  }

  box.innerHTML = matches
    .map(
      (p) => `
    <div class="rx-suggestion-item" onclick="selectRxPatient('${p.id}')">
      <span>${p.name}</span>
      <span class="sug-id">(${p.id})</span>
    </div>`,
    )
    .join("");
  box.classList.add("open");
}

function selectRxPatient(id) {
  const p = records.find((x) => x.id === id);
  document.getElementById("rx-patient-input").value = `${p.name} (${p.id})`;
  selectedRxPatientId = id;
  document.getElementById("rx-suggestions").classList.remove("open");
}

function submitPrescription() {
  const condition = document.getElementById("rx-condition").value.trim();
  const medication = document.getElementById("rx-medication").value.trim();
  const date = document.getElementById("rx-date").value || offsetDate(0);

  if (!selectedRxPatientId) {
    alert("Please select a patient from the suggestions.");
    return;
  }
  if (!condition || !medication) {
    alert("Please fill in the condition and medication.");
    return;
  }

  const p = records.find((x) => x.id === selectedRxPatientId);
  prescriptions.unshift({
    recordId: p.id,
    name: p.name,
    condition,
    medication,
    date,
    status: "completed",
    doctor: currentDoctor,
  });
  closePrescriptionModal();
  renderPrescriptions();
  showToast(`Prescription added for ${p.name}`);
}

/* ============ INIT ============ */
renderPatientsList();
renderAppointments();